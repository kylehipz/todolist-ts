dev:
	docker-compose -f docker-compose.dev.yml up

dev-rebuild:
	docker-compose -f docker-compose.dev.yml up

build:
	docker build -t kylehipolito/todolist:latest .

clean:
	docker-compose -f docker-compose.dev.yml down

run:
	docker run -p 8000:8000 --name todolist --env-file ./server/.env kylehipolito/todolist:latest
