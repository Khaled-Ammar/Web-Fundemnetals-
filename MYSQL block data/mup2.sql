use frindships_scema ;
select * from users;
insert into users (firset_name,last_name,created_at) values ('kaled','ammar','2022-8-9');
insert into users (firset_name,last_name,created_at) values ('ahmad','tome','2022-8-7');
insert into users (firset_name,last_name,created_at) values ('raed','ammar','2022-8-6');
select last_name from users where id=2;
update users set last_name = "Pancakes" where id=3;
DELETE from users where id=2;
select firset_name from users ;
select * from users order by firset_name desc;

