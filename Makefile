build:
	@docker build -q -t blog-app .

app: build
	@docker run --rm -d \
		-p 3000:3000 \
		-v `pwd`:/app \
		--name blog-app blog-app

kill:
	@docker stop blog-app