import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { ConfigValidation } from './validations/config.validation';
import { CommonConfigRegister } from './registers/common.register';
import { DatabaseConfigRegister } from './registers/database.register';
import { RedisConfigRegister } from './registers/redis.register';
import { ConfigProvider } from './constants/config.constant';
import { ConfigService } from './services/config.service';

@Global()
@Module({
  imports: [
    NestConfigModule.forRoot({
      validationSchema: ConfigValidation,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      },
      load: [CommonConfigRegister, DatabaseConfigRegister, RedisConfigRegister]
    })
  ],
  providers: [
    {
      provide: ConfigProvider,
      useClass: ConfigService
    }
  ],
  exports: [ConfigProvider]
})
export class ConfigModule {}
