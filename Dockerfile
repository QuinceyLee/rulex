FROM golang:alpine as builder
LABEL author="wwhai"
LABEL email="cnwwhai@gmail.com"
LABEL homepage="rulex.ezlinker.cn"
ENV APP_NAME="rulex"
ENV GO111MODULE=on \
    CGO_ENABLED=1 \
    GOPROXY="https://goproxy.cn,direct"
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories \
    &&  apk update && apk add bash && apk add --no-cache bash git openssh && apk add protobuf && apk add build-base

ADD . /rulex/
WORKDIR /rulex/
RUN make

FROM alpine:latest as prod

RUN apk --no-cache add ca-certificates

WORKDIR /rulex/

COPY --from=builder /rulex/rulex .
COPY --from=builder /rulex/conf ./conf
COPY --from=builder /rulex/plugin ./plugin
EXPOSE 2580
EXPOSE 2581
EXPOSE 2582
EXPOSE 2583
EXPOSE 2584
EXPOSE 2585

ENTRYPOINT ["./rulex", "run"]