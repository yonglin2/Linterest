# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | null: false, primary key
username        | string    | null: false, index: true, unique
image_url       | string    |
description     | text      |
password_digest | string    | null: false
session_token   | string    | null: false, index: true, unique: true

## pins

column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | null: false, primary key
name          | string    | null: false
description   | text      |
image_url     | string    | null: false
user_id       | string    | null: false, index: true (creator, references users)

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
title       | string    | null: false
description | string    |
user_id     | integer   | null: false, foreign key (references users), index: true

## pinnings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
board_id    | integer   | null: false, foreign key (references boards), index: true
pin_id      | integer   | null: false, foreign key (references pins), index: true

## follows
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | null: false, primary key
followee_id    | integer   | null: false, foreign key (references users), index: true
following_id   | integer   | null: false, foreign key (references users), index: true
