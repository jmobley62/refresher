SELECT * FROM test_tables

ALTER TABLE test_tables
ADD in_stock VARCHAR(3);

UPDATE test_tables
SET in_stock = 2
WHERE some_numbers = 1

ALTER TABLE test_tables
ALTER COLUMN in_stock TYPE INT
USING in_stock::INT;