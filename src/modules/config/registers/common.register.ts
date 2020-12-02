import { registerAs } from '@nestjs/config';

/** 基础配置 */
export const CommonConfigRegister = registerAs('common', () => ({
  jwtExpiresIn: parseInt(process.env.COMMON_JWT_EXPIRES_IN),
  printUserActivityLog: process.env.COMMON_PRINT_USER_ACTIVITY_LOG === 'true',
  printSystemLog: process.env.COMMON_PRINT_SYSTEM_LOG === 'true',
  enableSwagger: process.env.COMMON_ENABLE_SWAGGER === 'true',
  passwordSalt: process.env.COMMON_PASSWORD_SALT,
  port: parseInt(process.env.COMMON_PORT)
}));
