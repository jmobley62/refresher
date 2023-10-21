CREATE TABLE test_tables(some_text VARCHAR(100), some_numbers INT);
INSERT INTO test_tables (some_text, some_numbers)
VALUES ('Again', 3);
SELECT *
FROM test_tables;