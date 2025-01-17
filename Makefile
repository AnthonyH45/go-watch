run:
	go run main.go

build:
	cd frontend && yarn build && cp -r build/* ../backend/static

wbuild:
	cd frontend && yarn build && powershell.exe -command copy-item -r -fo build\* ..\backend\static

wplz:
	make wbuild
	make run

plz:
	cd frontend && yarn build && cp -r build/* ../backend/static
	go run main.go

fmt:
	go fmt ./main.go
