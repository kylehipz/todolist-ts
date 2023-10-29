dev:
	docker-compose -f docker-compose.dev.yml up

dev-rebuild:
	docker-compose -f docker-compose.dev.yml up

clean:
	docker-compose -f docker-compose.dev.yml down

build:
	docker build -t kylehipolito/todolist:latest .

prod:
	docker compose up

prod-clean:
	docker compose down
