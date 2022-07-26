use AdventureWorks2019
GO
--q1
select p.ProductID, p.Name, p.Color, p.ListPrice
from Production.Product p;

--q2
select p.ProductID, p.Name, p.Color, p.ListPrice
from Production.Product p
where p.ListPrice <> 0;

--q3
select p.ProductID, p.Name, p.Color, p.ListPrice
from Production.Product p
where p.Color is not NULL;

--q4
select p.ProductID, p.Name, p.Color, p.ListPrice
from Production.Product p
where p.Color is not NULL and p.ListPrice > 0;

--q5
select CONCAT(p.Name, ' ', p.Color)
from Production.Product p
where p.Color is not NULL;

--q6
select 'NAME: ' + p.Name + ' -- COLOR: ' + p.Color as 'result'
from Production.Product p
where p.Name is not NULL and p.color is not NULL;

--q7
select p.ProductID, p.Name
from Production.Product p
where p.ProductID BETWEEN 400 and 500;

--q8
select p.ProductID, p.Name, p.color
from Production.Product p
where p.color in ('Black', 'Blue');

--q9
select * from Production.Product p
where p.Name LIKE 'S%';

--q10
select p.Name, p.ListPrice 
from Production.Product p
where p.Name like 'A%' or p.Name like 'S%'
order by p.Name;

--q11
select p.Name
from Production.Product p 
where p.Name like 'SPO[^K]%'
order by p.Name;

--q12
select distinct isNull(p.ProductSubcategoryID, 0), isNull(p.color, '') as "result"
from Production.Product p;