import { registerAs } from '@nestjs/config';

/** Redis 数据库配置 */
export const RedisConfigRegister = registerAs('redis', () => ({
  token: {
    name: process.env.REDIS_TOKEN_NAME,
    db: process.env.REDIS_TOKEN_DB,
    host: process.env.REDIS_TOKEN_HOST,
    port: parseInt(process.env.REDIS_TOKEN_PORT),
    password: process.env.REDIS_TOKEN_PASSWORD,
    keyPrefix: process.env.REDIS_TOKEN_KEY_PREFIX
  },
  lock: {
    name: process.env.REDIS_LOCK_NAME,
    db: process.env.REDIS_LOCK_DB,
    host: process.env.REDIS_LOCK_HOST,
    port: parseInt(process.env.REDIS_LOCK_PORT),
    password: process.env.REDIS_LOCK_PASSWORD,
    keyPrefix: process.env.REDIS_LOCK_KEY_PREFIX
  }
}));
