CREATE TABLE todo (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  content VARCHAR NOT NULL,
  completed BOOLEAN NOT NULL,
  due_date DATE NOT NULL,
  created_by VARCHAR
);

CREATE TABLE users (
  id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  picture VARCHAR
);

INSERT INTO users VALUES (gen_random_uuid(), )

INSERT INTO todo VALUES (gen_random_uuid(), 'Answer interview examination', false, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Water the plants', true, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Study Golang', false, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Study npm workspaces', true, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Setup npm workspaces', true, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Design a blog application and compose it into microservices', false, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Design an ecommerce platform and compose it into microservices', false, now()::date, 'kylehipolito2109@gmail.com');
