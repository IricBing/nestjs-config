import { registerAs } from '@nestjs/config';

/** 基础配置 */
export const CommonConfigRegister = registerAs('common', () => ({
  /** jwt token有效期，单位：毫秒 */
  jwtExpiresIn: parseInt(process.env.COMMON_JWT_EXPIRES_IN),
  /** 是否打印用户活动日志 */
  printUserActivityLog: process.env.COMMON_PRINT_USER_ACTIVITY_LOG === 'true',
  /** 是否打印系统日志 */
  printSystemLog: process.env.COMMON_PRINT_SYSTEM_LOG === 'true',
  /** 是否启用Swagger */
  enableSwagger: process.env.COMMON_ENABLE_SWAGGER === 'true',
  /** 密码盐 */
  passwordSalt: process.env.COMMON_PASSWORD_SALT,
  /** 程序占用端口号 */
  port: parseInt(process.env.COMMON_PORT)
}));
