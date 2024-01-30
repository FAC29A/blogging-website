BEGIN;

INSERT INTO tasks VALUES
  (1, 'Create my first post', '2022-09-16 01:01:01'),
  (2, 'Life is good', '2022-09-16 11:10:07'),
  (3, 'Today is a sunny day', '2022-09-16 23:59:59')
ON CONFLICT(id) DO NOTHING;

COMMIT;