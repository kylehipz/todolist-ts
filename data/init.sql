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

INSERT INTO users VALUES (gen_random_uuid(), 'kylehipolito2109@gmail.com', 'Kyle Hipolito', 'https://lh3.googleusercontent.com/a/ACg8ocKMOME0YEYO6x0Dk-G0EaV8PhtQMg8DWJYTUcH1PND8czU=s96-c');
INSERT INTO users VALUES (gen_random_uuid(), 'kyle.hipolito.az@gmail.com', 'Kyle Hipolito', 'https://lh3.googleusercontent.com/a/ACg8ocI2A4-OZIVGF2yxTM8BpZyiVjipruVKNaq7J9UJztvGpQ=s96-c');

INSERT INTO todo VALUES (gen_random_uuid(), 'Answer interview examination', false, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Water the plants', true, now()::date, 'kyle.hipolito.az@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Study Golang', false, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Study npm workspaces', true, now()::date, 'kyle.hipolito.az@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Setup npm workspaces', true, now()::date, 'kylehipolito2109@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Design a blog application and compose it into microservices', false, now()::date, 'kyle.hipolito.az@gmail.com');
INSERT INTO todo VALUES (gen_random_uuid(), 'Design an ecommerce platform and compose it into microservices', false, now()::date, 'kylehipolito2109@gmail.com');
