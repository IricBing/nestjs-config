import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from './modules/config/config.module';
import { ConfigProvider } from './modules/config/constants/config.constant';
import { ConfigService } from './modules/config/services/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.select(ConfigModule).get<ConfigService>(ConfigProvider);

  await app.listen(configService.common.port);

  Logger.log(`服务已经启动:${await app.getUrl()}`);
}
bootstrap();
