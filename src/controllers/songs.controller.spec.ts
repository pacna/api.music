import { Test, TestingModule } from '@nestjs/testing';
import { SongsController } from './songs.controller';
import { SongsService } from '../services/songs.service';

describe('SongsController', () => {
  let songsController: SongsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SongsController],
      providers: [SongsService],
    }).compile();

    songsController = app.get<SongsController>(SongsController);
  });

  describe('songs', () => {
    it('should return "Hello World!"', () => {
      expect(songsController.getSongs()).toBe('Hello World!');
    });
  });
});