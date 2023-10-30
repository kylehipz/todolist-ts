# Todo List Application (TypeScript)
![image](https://github.com/kylehipz/todolist-ts/assets/31435847/d22ce230-6915-44dd-a576-bd9adedc40ed)

## Implemented using the following tech stack:
* Backend
  * NodeJS
  * ExpressJS
  * PostgreSQL
* Frontend
  * ReactJS
  * Vite
  * Antd
  * React Query
  * React OAuth Google

## How to run:
The easiest way is to use docker and docker-compose. As long as you have these installed, no additional setup is required.

### Using docker and docker-compose:
This setup already builds the frontend and backend code, and also spins up a postgres container for the app to connect to
```sh
docker-compose up
```
The app will use the `.env.prod` file for its environment

### Using npm and nodejs:
```sh
cd client
npm ci
npm run build
cd ../server
npm ci
npm run build
npm start
```
When using this setup, you need to provide the database credentials in the `.env`
```
NODE_ENV=development # node environment
PORT=xxxx # Server port
DB_HOST=xxxx # Database host name
DB_USER=xxxx # Database user name
DB_PASSWORD=xxxx # Database password
DB_NAME=xxxx # Database name
DB_PORT=xxxx # Database port
```

## Tests
### Frontend:
![image](https://github.com/kylehipz/todolist-ts/assets/31435847/90bc96d3-9cf0-4626-a9d7-6e605b6c2597)

### Backend:
![image](https://github.com/kylehipz/todolist-ts/assets/31435847/55138667-f636-49b3-bb28-fb87202b63f1)

