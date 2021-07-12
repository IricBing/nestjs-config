import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'nestjs-redis';
import { CommonConfigRegister } from './modules/config/registers/common.register';
import { DatabaseConfigRegister } from './modules/config/registers/database.register';
import { RedisConfigRegister } from './modules/config/registers/redis.register';
import { ConfigValidation } from './modules/config/validations/config.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: ConfigValidation,
      validationOptions: {
        allowUnknown: true,
        abortEarly: true
      },
      load: [CommonConfigRegister, DatabaseConfigRegister, RedisConfigRegister]
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (databaseConfig: ConfigType<typeof DatabaseConfigRegister>) => ({
        type: databaseConfig.type as 'postgres',
        host: databaseConfig.host,
        port: databaseConfig.port,
        username: databaseConfig.username,
        password: databaseConfig.password,
        database: databaseConfig.database,
        entities: [__dirname + '**/*.entity{.ts,.js}'],
        subscribers: [__dirname + '**/entities/subscribers/*.subscriber{.ts,.js}'],
        synchronize: databaseConfig.synchronize,
        logging: databaseConfig.logging
      }),
      inject: [DatabaseConfigRegister.KEY]
    }),
    RedisModule.forRootAsync({
      useFactory: (redisConfig: ConfigType<typeof RedisConfigRegister>) => [redisConfig.token, redisConfig.lock],
      inject: [RedisConfigRegister.KEY]
    })
  ]
})
export class AppModule {}
