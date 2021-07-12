import { registerAs } from '@nestjs/config';

/** Postgresql数据库配置 */
export const DatabaseConfigRegister = registerAs('database', () => ({
  /** 数据库类型 */
  type: process.env.DATABASE_TYPE,
  /** 数据库连接Host */
  host: process.env.DATABASE_HOST,
  /** 数据库连接端口 */
  port: parseInt(process.env.DATABASE_PORT),
  /** 数据库连接用户名 */
  username: process.env.DATABASE_USERNAME,
  /** 数据库连接密码 */
  password: process.env.DATABASE_PASSWORD,
  /** 要连接的数据库名称 */
  database: process.env.DATABASE_DATABASE,
  /** 是否同步数据库 */
  synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
  /** 是否打印执行SQL */
  logging: process.env.DATABASE_LOGGING === 'true'
}));
