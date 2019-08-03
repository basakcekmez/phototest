CREATE TABLE "test_hstr"
(
    test_name varchar(100) not null
        constraint table_name_pk
            primary key,
    test_result integer not null,
    test_date VARCHAR not null);

insert into test_hstr(test_name, test_result,test_date) values ('basak1',1,'2016-12-20 17:08:079');