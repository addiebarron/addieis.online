build:
	@docker-compose build
prod: 
	@docker-compose up -d
dev:
	@docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d
down:
	@docker-compose down
shell:
	@docker exec -it covidviz_web_1 bash