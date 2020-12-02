import * as Joi from 'joi';

/** .env文件校验 */
export const ConfigValidation = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test', 'staging').default('development'),

  // Common
  COMMON_JWT_EXPIRES_IN: Joi.number().default(720000),
  COMMON_PRINT_USER_ACTIVITY_LOG: Joi.boolean().default(true),
  COMMON_PRINT_SYSTEM_LOG: Joi.boolean().default(true),
  COMMON_ENABLE_SWAGGER: Joi.boolean().default(true),
  COMMON_PASSWORD_SALT: Joi.string().required(),
  COMMON_PORT: Joi.number().default(3000),

  // Postgresql数据库配置
  DATABASE_TYPE: Joi.string().default('postgres'),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().default(5432),
  DATABASE_USERNAME: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_DATABASE: Joi.string().required(),
  DATABASE_SYNCHRONIZE: Joi.boolean().default(false),
  DATABASE_LOGGING: Joi.boolean().default(false),

  // Redis Token数据库配置
  REDIS_TOKEN_NAME: Joi.string().required(),
  REDIS_TOKEN_DB: Joi.number().default(1),
  REDIS_TOKEN_HOST: Joi.string().required(),
  REDIS_TOKEN_PORT: Joi.number().default(6379),
  REDIS_TOKEN_PASSWORD: Joi.string().allow('').default(''),
  REDIS_TOKEN_KEY_PREFIX: Joi.string().required(),

  // Redis 分布式锁数据库配置
  REDIS_LOCK_NAME: Joi.string().required(),
  REDIS_LOCK_DB: Joi.number().default(2),
  REDIS_LOCK_HOST: Joi.string().required(),
  REDIS_LOCK_PORT: Joi.number().default(6379),
  REDIS_LOCK_PASSWORD: Joi.string().allow('').default(''),
  REDIS_LOCK_KEY_PREFIX: Joi.string().required()
});
