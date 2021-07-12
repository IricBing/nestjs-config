import { Logger } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { CommonConfigRegister } from './modules/config/registers/common.register';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const commonConfig = app.select(AppModule).get<ConfigType<typeof CommonConfigRegister>>(CommonConfigRegister.KEY);

  await app.listen(commonConfig.port);

  Logger.log(`服务已经启动:${await app.getUrl()}`);
}
bootstrap();
