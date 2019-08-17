CREATE TABLE `test_hstr` (
  `test_name` varchar(100) NOT NULL,
  `test_result` JSON NOT NULL,
  `test_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`test_name`)
);

INSERT INTO phototest.test_hstr (test_name, test_result, test_date) VALUES ('basak1', '{"smart": {"test1": 1, "test2": 0}, "remote": {}}', '2019-08-17 14:13:05');
INSERT INTO phototest.test_hstr (test_name, test_result, test_date) VALUES ('basak2', '{"smart": {"test1": 0, "test2": 0}, "remote": {}}', '2019-08-17 14:13:05');