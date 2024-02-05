BEGIN;

CREATE TABLE IF NOT EXISTS blog_posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    blogpost TEXT,
    created_at DATETIME,
    likes INTEGER DEFAULT 0
);

COMMIT;