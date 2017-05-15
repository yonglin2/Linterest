# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | null: false, primary key
username        | string    | null: false, index: true, unique
img_url         | string    |
password_digest | string    | null: false
session_token   | string    | null: false, index: true, unique: true

## pins

column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | null: false, primary key
name          | string    | null: false
description   | text      |
image_url     | string    | null: false
user_id       | integer   | null: false, foreign key (references users), index: true
board_id      | integer   | null: false, foreign key (references boards), index: true

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
name        | string    | null: false
description | string    |
user_id     | integer   | null: false, foreign key (references users), index: true

## follows
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | null: false, primary key
followee_id    | integer   | null: false, foreign key (references users), index: true
following_id   | integer   | null: false, foreign key (references users), index: true
