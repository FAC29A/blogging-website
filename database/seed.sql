BEGIN;

INSERT INTO blog_posts VALUES
  (1, 'Fran', 'Create my first post', '2022-09-16 01:01:01', 1),
  (2, 'Lucy', 'Life is good', '2022-09-16 11:10:07', 0),
  (3, 'Lucien', 'Today is a sunny day', '2022-09-16 23:59:59', 1),
  (4, 'Phoebe', 'Happy coding guys', '2022-09-26 23:59:59', 1)
ON CONFLICT(id) DO NOTHING;

COMMIT;