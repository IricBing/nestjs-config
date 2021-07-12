# `NestJS` 配置模块设计案例

## 设计笔记

* [个人Gitlab](https://git.virtualbing.cn/Iric/note/blob/master/NodeJS/NestJS/%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E9%85%8D%E7%BD%AE%E6%A8%A1%E5%9D%97%E8%AE%BE%E8%AE%A1/README.md)
* [Github](https://github.com/IricBing/note/blob/master/NodeJS/NestJS/%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1/%E9%85%8D%E7%BD%AE%E6%A8%A1%E5%9D%97%E8%AE%BE%E8%AE%A1/README.md)

### 基础设施

* node 14.17.3
* Postgresql 13，使用数据库名称：demo
* Redis

如果本地没有安装 `PostgresQL` 和 `redis` ，可以用 `docker` 启动服务

* 安装 `docker` 和 `docker-compose`: [指南](https://docs.docker.com/compose/install/)
* 运行 `docker-compose up -d`

## 安装

```base
$ yarn install  #安装npm依赖
```

## 本地运行

`注意：` 首先查看 `.env.development` 中的配置是否正确！！！

```bash
$ cp .env.development .env # 生成 .env 文件

$ yarn start:dev  #本地测试环境启动

$ yarn build  #构建打包
```

## Debug

在需要的地方打断点，按 `F5` 即可调试
