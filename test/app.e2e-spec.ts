import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/songs (GET)', async () => {
    return request(app.getHttpServer())
      .get('/songs')
      .expect(200)
    
  });

  it('/songs/favorites (GET) ', async () => {
    return request(app.getHttpServer())
      .get('/songs/favorites')
      .expect(200)
  })


  it('/artists (GET) ', async () => {
    return request(app.getHttpServer())
      .get('/artists')
      .expect(200)
  })

  afterAll(async () => {
    await app.close();
  });

});
