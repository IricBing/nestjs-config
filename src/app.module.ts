import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'nestjs-redis';
import { ConfigModule } from './modules/config/config.module';
import { ConfigProvider } from './modules/config/constants/config.constant';
import { ConfigService } from './modules/config/services/config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => configService.database,
      inject: [ConfigProvider]
    }),
    RedisModule.forRootAsync({
      useFactory: (configService: ConfigService) => [configService.redis.token, configService.redis.lock],
      inject: [ConfigProvider]
    }),
    ConfigModule
  ]
})
export class AppModule {}
