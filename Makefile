APP=rulex
VERSION=V0.0.1
SHELL=/bin/bash
.PHONY: all
all:
	make build

.PHONY: build
build:
	go mod tidy
	chmod a+x gen_version.sh
	chmod a+x gen_proto.sh
	chmod a+x gen_banner.sh
	go generate
	CGO_ENABLED=1 GOOS=linux
	go build -v -ldflags "-s -w" -o ${APP} main.go

.PHONY: xx
xx:
	make build

.PHONY: windows
windows:
	go mod tidy
	SET GOOS=windows
	SET CGO_ENABLED=1
	go build -ldflags "-s -w" -o ${APP}.exe main.go

.PHONY: arm32
arm32:
	CC=arm-linux-gnueabi-gcc # Support ubuntu 1804, should install 'gcc-arm-linux-gnueabi'
	GOARM=7
	GOARCH=arm
	GOOS=linux
	CGO_ENABLED=1
	go build -ldflags "-s -w" -o ${APP} -ldflags "-linkmode external -extldflags -static" main.go

.PHONY: run
run:
	go run -race main.go run

.PHONY: test
test:
	go test rulex/test -v

.PHONY: cover
cover:
	go test rulex/test -v -cover

.PHONY: clean
clean:
	go clean
	rm _release -rf
	rm *.db *log.txt

.PHONY: clean-grpc
