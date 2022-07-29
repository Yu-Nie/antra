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

--q8
select c.CustomerID, COUNT(od.ProductID) as NumofProduct
from Customers c inner join Orders o on c.CustomerID = o.CustomerID
inner join [Order Details] od on o.OrderID = od.OrderID
group by c.CustomerID
having COUNT(od.ProductID) > 100

--q9
select si.CompanyName as "Supplier Company Name", su.CompanyName as "Shipping Company Name"
from shippers si cross join suppliers su

--q10
select o.OrderDate, p.ProductName
from Products p inner join [Order Details] od on p.ProductID = od.ProductID
inner join Orders o on o.OrderId = od.OrderId

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

--q16
select p.ProductName, sum(od.Quantity) as totalOrder
from Products p inner join [Order Details] od on p.ProductID = od.ProductID
group by p.ProductName

--q17
--a
--I asked about how to use union with "at least 2" for this question in zoom
-- but no replies yet, so I just followed the instruction given on zoom
select c.City
from Customers c 
group by c.City
having COUNT(c.CustomerID) = 0
union 
select c.City
from Customers c 
group by c.City
having COUNT(c.CustomerID) = 1

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
select top 5 od.ProductID, od.UnitPrice as average, c.City
from Customers c inner join Orders o on c.CustomerID = o.CustomerID
inner join [Order Details] od on o.OrderID = od.OrderID
order by od.Quantity desc

--20
select top 1 e.City as SoldCity, c.City as OrderCity
from Orders o inner join [Order Details] od on o.OrderID = od.OrderID
inner join Customers c on c.CustomerID = o.CustomerID
inner join Employees e on o.EmployeeID = e.EmployeeID
group by e.City, c.City
order by COUNT(o.OrderID), count(od.Quantity) desc

--21
-- we can use normalization to remove duplicates from a table
-- we can also use row_number() to find the duplicates rows and delete them