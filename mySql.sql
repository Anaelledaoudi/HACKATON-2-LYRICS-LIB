-- Database: hackaton2

-- DROP DATABASE IF EXISTS hackaton2;

CREATE DATABASE hackaton2
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Hebrew_Israel.1255'
    LC_CTYPE = 'Hebrew_Israel.1255'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
    
    create table songgg(
     id serial primary key,
     title varchar(100),
     lyric varchar(3000)
    )
   INSERT INTO songgg(title,lyric)
    VALUES('toy','Baby
by Justin Bieber ft. Ludacris--2010

And Im like baby, baby, baby, oh
Like baby, baby, baby, no
Like baby, baby, baby, oh
I thought youd always be mine, mine

Baby, baby, baby, oh
Like baby, baby, baby, no
Like baby, baby, baby, oh
I thought youd always be mine, mine

When I was 13, I had my first love
There was nobody that compared to my baby
And nobody came between us who could ever come above
She had me going crazy, oh I was starstruck
She woke me up daily, dont need no Starbucks

Baby, baby, baby, oh
Like baby, baby, baby, no
Like baby, baby, baby, oh
I thought youd always be mine, mine

Im all gone
(Yeah, yeah, yeah)
(Yeah, yeah, yeah)
Now Im all gone
(Yeah, yeah, yeah)
(Yeah, yeah, yeah)
Now Im all gone
(Yeah, yeah, yeah)
(Yeah, yeah, yeah)
Now Im all gone, gone, gone, gone
Im gone');

select id from songgg
    
    