import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { RedisModuleOptions } from 'nestjs-redis';

@Injectable()
export class ConfigService {
  constructor(private readonly nestConfigService: NestConfigService) {}

  /** 公共配置 */
  get common() {
    return {
      /** jwt token有效期，单位：毫秒 */
      jwtExpiresIn: this.nestConfigService.get<number>('common.jwtExpiresIn'),
      /** 是否打印用户活动日志 */
      printUserActivityLog: this.nestConfigService.get<boolean>('common.printUserActivityLog'),
      /** 是否打印系统日志 */
      printSystemLog: this.nestConfigService.get<boolean>('common.printSystemLog'),
      /** 密码盐 */
      passwordSalt: this.nestConfigService.get<string>('common.passwordSalt'),
      /** 是否启用Swagger */
      enableSwagger: this.nestConfigService.get<boolean>('common.enableSwagger'),
      /** 程序占用端口号 */
      port: this.nestConfigService.get<number>('common.port')
    };
  }

  /** postgresql数据库配置 */
  get database(): TypeOrmModuleOptions {
    return {
      /** 数据库类型 */
      type: this.nestConfigService.get<'postgres'>('database.type'),
      /** 数据库连接Host */
      host: this.nestConfigService.get<string>('database.host'),
      /** 数据库连接端口 */
      port: this.nestConfigService.get<number>('database.port'),
      /** 数据库连接用户名 */
      username: this.nestConfigService.get<string>('database.username'),
      /** 数据库连接密码 */
      password: this.nestConfigService.get<string>('database.password'),
      /** 要连接的数据库名称 */
      database: this.nestConfigService.get<string>('database.database'),
      /** 代码实体目录 */
      entities: [__dirname + '../../../**/*.entity{.ts,.js}'],
      /** 是否同步数据库 */
      synchronize: this.nestConfigService.get<boolean>('database.synchronize'),
      /** 是否打印orm */
      logging: this.nestConfigService.get<boolean>('database.logging')
    };
  }

  /** redis数据库配置 */
  get redis() {
    return {
      /** token存储数据库配置 */
      token: this.redisTokenConfig(),
      /** 分布式锁数据库配置 */
      lock: this.redisLockConfig()
    };
  }

  private redisTokenConfig(): RedisModuleOptions {
    return {
      /** 自定义服务名称 */
      name: this.nestConfigService.get<string>('redis.token.name'),
      /** 数据库Host */
      host: this.nestConfigService.get<string>('redis.token.host'),
      /** 数据库端口 */
      port: this.nestConfigService.get<number>('redis.token.port'),
      /** 数据库编号0-15 */
      db: this.nestConfigService.get<number>('redis.token.db'),
      /** 登录密码 */
      password: this.nestConfigService.get<string>('redis.token.password'),
      /** Key前缀 */
      keyPrefix: this.nestConfigService.get<string>('redis.token.keyPrefix')
    };
  }

  private redisLockConfig(): RedisModuleOptions {
    return {
      /** 自定义服务名称 */
      name: this.nestConfigService.get<string>('redis.lock.name'),
      /** 数据库Host */
      host: this.nestConfigService.get<string>('redis.lock.host'),
      /** 数据库端口 */
      port: this.nestConfigService.get<number>('redis.lock.port'),
      /** 数据库编号0-15 */
      db: this.nestConfigService.get<number>('redis.lock.db'),
      /** 登录密码 */
      password: this.nestConfigService.get<string>('redis.lock.password'),
      /** Key前缀 */
      keyPrefix: this.nestConfigService.get<string>('redis.lock.keyPrefix')
    };
  }
}
