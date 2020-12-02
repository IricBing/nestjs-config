# Nestjs 配置模块设计案例

### 基础设施

* node 14.15.0
* Postgresql 13，使用数据库名称：demo
* Redis

如果本地没有安装 PostgresQL 和 redis，可以用 docker 启动服务

* 安装 docker 和 docker-compose: [指南](https://docs.docker.com/compose/install/)
* 运行 `docker-compose up -d`

## 安装

``` base
$ yarn install  #安装npm依赖
```

## 本地运行

`注意：` 首先查看 `.env.development` 中的配置是否正确！！！

``` bash
$ cp .env.development .env # 生成 .env 文件

$ yarn start:dev  #本地测试环境启动

$ yarn build  #构建打包
```

## Debug

在需要的地方打断点，按F5即可调试
