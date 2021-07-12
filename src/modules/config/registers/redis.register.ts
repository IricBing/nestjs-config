import { registerAs } from '@nestjs/config';

/** Redis 数据库配置 */
export const RedisConfigRegister = registerAs('redis', () => ({
  /** token存储数据库配置 */
  token: {
    /** 自定义服务名称 */
    name: process.env.REDIS_TOKEN_NAME,
    /** 数据库编号0-15 */
    db: parseInt(process.env.REDIS_TOKEN_DB),
    /** 数据库Host */
    host: process.env.REDIS_TOKEN_HOST,
    /** 数据库端口 */
    port: parseInt(process.env.REDIS_TOKEN_PORT),
    /** 登录密码 */
    password: process.env.REDIS_TOKEN_PASSWORD,
    /** Key前缀 */
    keyPrefix: process.env.REDIS_TOKEN_KEY_PREFIX
  },
  /** 分布式锁数据库配置 */
  lock: {
    /** 自定义服务名称 */
    name: process.env.REDIS_LOCK_NAME,
    /** 数据库编号0-15 */
    db: parseInt(process.env.REDIS_TOKEN_DB),
    /** 数据库Host */
    host: process.env.REDIS_LOCK_HOST,
    /** 数据库端口 */
    port: parseInt(process.env.REDIS_LOCK_PORT),
    /** 登录密码 */
    password: process.env.REDIS_LOCK_PASSWORD,
    /** Key前缀 */
    keyPrefix: process.env.REDIS_LOCK_KEY_PREFIX
  }
}));
