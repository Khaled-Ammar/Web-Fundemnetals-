use books_schema ;
select*from authors;
authors_has_booksinsert into authors (author_name) values ('Jane Austen');
insert into authors (author_name) values ('Emily Dickinson');
insert into authors (author_name) values ('Fyodor Dostoevsky');
insert into authors (author_name) values ('William Shakespeare');
insert into authors (author_name) values ('Lau Tzu');

select*from books;
 insert into books (titel) values ('C Sharp');
 insert into books (titel) values ('Java');
 insert into books (titel) values (' Python');
 insert into books (titel) values ('PHP');
 insert into books (titel) values ('Ruby');
 update books set titel="c#" where id=1;
 update authors set author_name="bill" where id=4;
SELECT * FROM authors;

SELECT * FROM authors_has_books;
insert into authors_has_books (author_id,book_id) values (1,1),(1,2),(1,3);
insert into authors_has_books (author_id,book_id) values (2,1),(2,2),(2,3);
insert into authors_has_books (author_id,book_id) values (3,1),(3,2),(3,3),(3,4);
insert into authors_has_books (author_id,book_id) values (4,1),(4,2),(4,3),(4,4),(4,5);
insert into authors_has_books (author_id,book_id) values (5,2);

SELECT  auther_name,book_titel  FROM authers
JOIN authors_has_books ON id=book_id where book_id=3;

select*from authors_has_books;
delete from authors_has_books where id=3; 
delete from authors_has_books where id=15;
select* from authors_has_books where id=7 or id=8 or id=9;

insert into authors_has_books (author_id,book_id) values (4,5);
select* from authors_has_books where id=17;












 






