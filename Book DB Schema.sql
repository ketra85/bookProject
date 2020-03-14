CREATE TABLE "user" (
  "user_id" int PRIMARY KEY,
  "username" varchar,
  "password" varchar,
  "firstname" varchar,
  "lastname" varchar,
  "email" varchar,
  "cc_id" int,
  "created_at" timestamp
);

CREATE TABLE "role" (
  "role_id" int PRIMARY KEY,
  "role_name" varchar,
  "description" varchar
);

CREATE TABLE "premission" (
  "permission_id" int PRIMARY KEY,
  "name" varchar,
  "action" varchar
);

CREATE TABLE "role_permission" (
  "role_id" int,
  "permission_id" int
);

CREATE TABLE "user_role" (
  "user_id" int,
  "role_id" int
);

CREATE TABLE "book" (
  "book_id" int PRIMARY KEY,
  "title" varchar,
  "description" varchar,
  "author_id" int,
  "publisher_id" int,
  "published_year" date,
  "type_id" int,
  "pages" int,
  "price" int,
  "cdn_link" varchar,
  "created_at" timestamp
);

CREATE TABLE "author" (
  "author_id" int PRIMARY KEY,
  "firstname" varchar,
  "lastname" varchar,
  "email" varchar
);

CREATE TABLE "book_author" (
  "book_id" int,
  "author_id" int
);

CREATE TABLE "genre" (
  "genre_id" int PRIMARY KEY,
  "genre_name" varchar
);

CREATE TABLE "book_genre" (
  "book_id" int,
  "genre_id" int
);

CREATE TABLE "type" (
  "type_id" int PRIMARY KEY,
  "type_name" varchar
);

CREATE TABLE "order" (
  "order_id" int PRIMARY KEY,
  "user_id" int,
  "payment_id" int,
  "status" boolean,
  "created_at" timestamp,
  "total" int
);

CREATE TABLE "order_item" (
  "order_id" int,
  "book_id" int
);

CREATE TABLE "payment" (
  "payment_id" int PRIMARY KEY,
  "cc_id" int,
  "amount" int,
  "status" boolean,
  "paid_at" timestamp
);

CREATE TABLE "credit_card" (
  "cc_id" int PRIMARY KEY,
  "cc_number" int,
  "name" varchar,
  "expiry_date" date,
  "security_number" int
);

ALTER TABLE "credit_card" ADD FOREIGN KEY ("cc_id") REFERENCES "user" ("cc_id");

ALTER TABLE "role_permission" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("role_id");

ALTER TABLE "role_permission" ADD FOREIGN KEY ("permission_id") REFERENCES "premission" ("permission_id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "user_role" ADD FOREIGN KEY ("role_id") REFERENCES "role" ("role_id");

ALTER TABLE "book" ADD FOREIGN KEY ("type_id") REFERENCES "type" ("type_id");

ALTER TABLE "book_author" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("book_id");

ALTER TABLE "book_author" ADD FOREIGN KEY ("author_id") REFERENCES "author" ("author_id");

ALTER TABLE "book_genre" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("book_id");

ALTER TABLE "book_genre" ADD FOREIGN KEY ("genre_id") REFERENCES "genre" ("genre_id");

ALTER TABLE "order" ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE "order" ADD FOREIGN KEY ("payment_id") REFERENCES "payment" ("payment_id");

ALTER TABLE "order_item" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("order_id");

ALTER TABLE "order_item" ADD FOREIGN KEY ("book_id") REFERENCES "book" ("book_id");

ALTER TABLE "payment" ADD FOREIGN KEY ("cc_id") REFERENCES "credit_card" ("cc_id");
