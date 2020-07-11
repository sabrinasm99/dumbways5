-- Up
CREATE TABLE category_tb (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(64)
);

CREATE TABLE video_tb (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    category_id INTEGER,
    attache TEXT,
    thumbnail TEXT
);

INSERT INTO category_tb (name) values ('Hiburan');
INSERT INTO category_tb (name) values ('Komedi');
INSERT INTO category_tb (name) values ('Drama');
INSERT INTO category_tb (name) values ('Game');

INSERT INTO video_tb (title, category_id, attache, thumbnail) values('Doraemon', 2, 'doraemon.mp4', 'doraemon.jpg');
INSERT INTO video_tb (title, category_id, attache, thumbnail) values('Sinchan', 4, 'sinchan.mp4', 'sinchan.jpg');