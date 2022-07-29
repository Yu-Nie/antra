--q1
CREATE VIEW [view_product_order_nie] 
as 
select p.ProductName, sum(od.Quantity) as total
from Products p INNER JOIN [Order Details] od on p.ProductID = od.ProductID
group by p.ProductName

GO

--q2
create proc sp_product_order_quantity_nie
@id INT,
@total_Quantity INT OUT
as 
BEGIN
    SELECT @total_Quantity = SUM(Quantity) 
    from [order Details] 
    where ProductID = @id
    group by ProductID 
END

go

--q3
CREATE PROC sp_product_order_city_nie
@pname VARCHAR(40)
as 
BEGIN
    SELECT top 5 ShipCity
    from Orders o inner join [Order Details] od on o.orderID = od.orderID
    inner join Products p on p.ProductID = od.ProductID
    where ProductName = @pname
    group by shipcity
    order by COUNT(o.orderID)
END

--q4
create table city_nie 
(
    Id int PRIMARY KEY, 
    City VARCHAR(50)

) 

create table people_nie 
(
    id int, Name VARCHAR(50) PRIMARY KEY,
    City int  FOREIGN KEY REFERENCES city_nie(Id)
)

insert into city_nie VALUES
(1, 'Seattle'), (2, 'Green Bay')

INSERT into people_nie values
(1, 'Aaron Rodgers', 2),
(2, 'Russell Wilson', 1),
(3, 'Jody Nelson', 2);

update city_nie 
SET City = 'Madison' where City = 'Seattle'

go 

create view Packers_nie
as 
select p.id from people_nie p join city_nie c on p.City = c.Id
where c.City = 'Green Bay'

GO

drop table people_nie
drop table city_nie
drop VIEW Packers_nie

GO
--q5
create PROC sp_brithday_employees_nie
as 
BEGIN
    select * INTO [birthday_employees_nie]
    from Employees
    where Month(BirthDate) = '02'
END

EXEC sp_brithday_employees_nie
select * from birthday_employees_nie


--q6
--compare the row number of left join and right join and inner JOIN