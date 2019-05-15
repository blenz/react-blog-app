
APP_NAME= blog-app

build:
	@docker build -q -t $(APP_NAME) .

app: build
	@docker run --rm -d \
		-p 3000:3000 \
		-v `pwd`:/app \
		--name $(APP_NAME) $(APP_NAME)

kill:
	@docker stop $(APP_NAME)