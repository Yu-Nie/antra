use AdventureWorks2019
go

--q1
select pc.Name as Country, ps.Name as Province
From Person.CountryRegion pc 
inner Join person.StateProvince ps on pc.CountryRegionCode = ps.CountryRegionCode

--q2
select pc.Name as Country, ps.Name as Province
From Person.CountryRegion pc 
inner Join person.StateProvince ps on pc.CountryRegionCode = ps.CountryRegionCode
where pc.Name in ('Germany', 'Canada')


use northwind
GO

--q3
select distinct p.ProductID, p.ProductName
from Products p inner join [Order Details] od on p.ProductId = od.ProductId 
inner join Orders o on od.OrderID = o.OrderID
where YEAR(o.OrderDate) - YEAR(GETDATE()) < 25 

--q4
select top 5 o.ShipPostalCode
from Products p inner join [Order Details] od on p.ProductId = od.ProductId 
inner join Orders o on od.OrderID = o.OrderID
where YEAR(o.OrderDate) - YEAR(GETDATE()) < 25 
order by od.Quantity * od.UnitPrice

-- List top 5 locations (Zip Code) where the products sold most in last 25 years.

SELECT TOP 5 o.ShipPostalCode, SUM(od.Quantity) as qty 
FROM Orders o JOIN [Order Details] od ON o.OrderID = od.OrderID 
WHERE o.ShipPostalCode IS NOT NULL AND DATEDIFF(year, o.OrderDate, GETDATE())< 25 
GROUP BY ShipPostalCode 
ORDER BY qty DESC;


--q5
select c.City, COUNT(c.CustomerID) as NumofCustomer
from customers c
GROUP by c.City

--q6
select c.City, COUNT(c.CustomerID) as NumofCustomer
from customers c
GROUP by c.City
having COUNT(c.CustomerID) > 2

--q7
select c.CompanyName, COUNT(o.OrderID) as NumofProduct
from Customers c inner join orders o on c.CustomerID = o.CustomerID
group by c.CompanyName

-- Display the names of all customers  along with the  count of products they bought.

SELECT c.CustomerID, c.CompanyName, c.ContactName,  SUM(od.Quantity) AS QTY 
FROM  Customers c 
LEFT JOIN  Orders o  ON c.CustomerID = o.CustomerID 
LEFT JOIN  [Order Details] od ON o.OrderID = od.OrderID 
GROUP BY c.CustomerID, c.CompanyName, c.ContactName 
ORDER BY QTY;


--q8
select c.CustomerID, COUNT(od.ProductID) as NumofProduct
from Customers c inner join Orders o on c.CustomerID = o.CustomerID
inner join [Order Details] od on o.OrderID = od.OrderID
group by c.CustomerID
having COUNT(od.ProductID) > 100

--q9
select si.CompanyName as "Supplier Company Name", su.CompanyName as "Shipping Company Name"
from shippers si cross join suppliers su
order by 2, 1

--q10
select o.OrderDate, p.ProductName
from Products p inner join [Order Details] od on p.ProductID = od.ProductID
inner join Orders o on o.OrderId = od.OrderId
group by o.OrderDate, p.ProductName 
order by o.OrderDate

--q11
select e1.FirstName + ' ' + e1.LastName as employee1, e2.FirstName + ' ' + e1.LastName as employee2
from Employees e1, Employees e2
where e2.Title = e1.Title and e2.EmployeeID <> e1.EmployeeID

--q12
select e.FirstName + ' ' + e.LastName as manager
from Employees e 
where e.EmployeeID in (
    select e1.ReportsTo 
    from Employees e1
    group by e1.ReportsTo
    having count(e1.EmployeeID) > 2
    )

--Display all the Managers who have more than 2 employees reporting to them.

SELECT T1.EmployeeId, T1.LastName, T1.FirstName,T2.ReportsTo, COUNT(T2.ReportsTo) AS Subordinate
FROM Employees T1 JOIN Employees T2 ON T1.EmployeeId = T2.ReportsTo 
WHERE T2.ReportsTo IS NOT NULL 
GROUP BY T1.EmployeeId, T1.LastName, T1.FirstName,T2.ReportsTo 
HAVING COUNT(T2.ReportsTo) > 2


--q13
select c.City, c.CompanyName, ContactName, 'Customer' as Type
from Customers c 
union
select s.City, s.CompanyName, s.ContactName, 'Supplier' as Type
from Suppliers s 

--q14
select distinct c.City
from Customers c
where c.City in (
    select e.City from Employees e
) 

--q15
--a 
select distinct c.City
from Customers c
where c.City not in (
    select e.City from Employees e
) 

--b 
select distinct c.City 
from Customers c left join Employees e on c.City = e.City
where e.City is NULL

--c
select distinct city from Customers
except
select distinct city from Employees


--q16
select p.ProductName, sum(od.Quantity) as totalOrder
from Products p inner join [Order Details] od on p.ProductID = od.ProductID
group by p.ProductName

--q17
--a
select city from Customers
except
(select c.City
from Customers c 
group by c.City
having COUNT(c.CustomerID) = 0
union 
select c.City
from Customers c 
group by c.City
having COUNT(c.CustomerID) = 1)

--b
select c.City
from Customers c 
group by c.City
having COUNT(c.CustomerID) >= 2

--q18
select c.City
from Customers c inner join Orders o on c.CustomerID = o.CustomerID
inner join [Order Details] od on o.OrderID = od.OrderID
group by c.City
HAVING Count(od.ProductID) >=2

--q19
select top 5 ProductID,AVG(UnitPrice) as AvgPrice,
(select top 1 City from Customers c 
    join Orders o on o.CustomerID = c.CustomerID 
    join [Order Details] od2 on od2.OrderID = o.OrderID 
    where od2.ProductID = od1.ProductID 
    group by city 
    order by SUM(Quantity) desc
 ) as City
from [Order Details] od1 
group by ProductID
order by sum(Quantity) desc



--20
select top 1 e.City as SoldCity, c.City as OrderCity
from Orders o inner join [Order Details] od on o.OrderID = od.OrderID
inner join Customers c on c.CustomerID = o.CustomerID
inner join Employees e on o.EmployeeID = e.EmployeeID
group by e.City, c.City
order by COUNT(o.OrderID), count(od.Quantity) desc


select (select top 1 City 
        from Orders o 
        join [Order Details] od on o.OrderID=od.OrderID 
        join Customer c on c.CustomerID = o.CustomerID 
        group by c.CustomerID, c.City 
        order by COUNT(*) desc
        ) as MostOrderedCity, 
        (select top 1 City 
        from Orders o 
        join [Order Details] od on o.OrderID=od.OrderID 
        join Employees e on e.EmployeeID = o.EmployeeID 
        group by e.EmployeeID,e.City 
        order by sum(Quantity) desc
        ) as MostQunatitySoldCity


--21
-- use Row_Number() with parition by then delete the rows where rowNumber > 1
