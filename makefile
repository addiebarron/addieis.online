.PHONY: build prod dev down shell

build:
	@docker-compose build
prod: 
	@docker-compose up --build -d
dev:
	@docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build
down:
	@docker-compose down
shell:
	@docker exec -it addieisonline_web_1 bash
