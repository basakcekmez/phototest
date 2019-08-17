CREATE TABLE "test_hstr"
(
    test_name varchar(100) not null
        constraint table_name_pk
            primary key,
    test_result VARCHAR not null,
    test_date VARCHAR not null);

INSERT INTO test_hstr (test_name, test_result, test_date) VALUES ('basak1', '{"smart": {"test1": 1, "test2": 0}, "remote": {}}', '2016-12-20 17:08:07.000');
INSERT INTO test_hstr (test_name, test_result, test_date) VALUES ('basak2', '{"smart": {"test1": 0, "test2": 0}, "remote": {}}', '2016-12-20 17:08:07.000');