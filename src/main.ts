import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 5000;

    const options = new DocumentBuilder()
        .setTitle('API Music')
        .setDescription('The backend for the React Music Player and future music players')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/', app, document);

    await app.listen(port);
}
bootstrap();