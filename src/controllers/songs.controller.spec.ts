// controllers
import { SongsController } from './songs.controller';

// services
import { SongsService } from '../services/songs.service';

// interfaces
import { ISongs } from '../interfaces/songs.interface';
import { IFavorite } from '../interfaces/favorite.interface';

// others
import { Model } from 'mongoose';

const songsMockResponse = [
  {
    _id: '123',
    title: 'Blah',
    artist: 'Hello World',
    length: '3:39',
    path: 'https://www.w3schools.com/tags/horse.mp3',
    favorite: false,
  },
  {
    _id: '456',
    title: 'Blah Blah',
    artist: 'Foo Bar',
    length: '3:33',
    path: 'https://www.w3schools.com/tags/horse.mp3',
    favorite: true,
  },
];

class SongsMockService {
  async getSongs(): Promise<any> {
    return songsMockResponse;
  }
  async getFavorites(): Promise<any> {
    return songsMockResponse.filter(songs => songs.favorite === true);
  }
  async updateFavorite(id: string, body: IFavorite): Promise<any> {
    const song = songsMockResponse.find(songs => songs._id === id);
    song.favorite = body.favorite;
  }
}

describe('SongsController', () => {
  let songsController: SongsController;
  let songsService: SongsService;
  let songsModel: Model<ISongs>;

  beforeEach(() => {
    songsService = new SongsService(songsModel);
    songsController = new SongsController(songsService);
  });

  describe('songs endpoint', () => {
    it('should retrieve songs', async () => {
      // ARRANGE
      const songsMockService = new SongsMockService();
      jest
        .spyOn(songsService, 'getSongs')
        .mockImplementation(songsMockService.getSongs);

      // ACT
      const response = await songsController.getSongs();

      // ASSERT
      expect(response).toMatchSnapshot();
      expect(songsService.getSongs).toBeCalled();
      expect(response).toBe(songsMockResponse);
    });

    it('should retrieve favorite songs', async () => {
      // ARRANGE
      const songsMockService = new SongsMockService();
      jest
        .spyOn(songsService, 'getFavorites')
        .mockImplementation(songsMockService.getFavorites);

      // ACT
      const response = await songsController.getFavorites();

      // ASSERT
      expect(response).toMatchSnapshot();
      expect(songsService.getFavorites).toHaveBeenCalled();
      expect(response[0].favorite).toBe(true);
    });

    it('should add a favorite', async () => {
      // ARRANGE
      const songsMockService = new SongsMockService();
      jest
        .spyOn(songsService, 'updateFavorite')
        .mockImplementation(songsMockService.updateFavorite);

      // ACT
      await songsController.updateFavorite('123', { favorite: true });

      // ASSERT
      expect(songsService.updateFavorite).toHaveBeenCalled();
      expect(songsMockResponse[0].favorite).toBe(true);
    });

    it('should remove a favorite', async () => {
      // ARRANGE
      const songsMockService = new SongsMockService();
      jest
        .spyOn(songsService, 'updateFavorite')
        .mockImplementation(songsMockService.updateFavorite);

      // ACT
      await songsController.updateFavorite('123', { favorite: false });

      // ASSERT
      expect(songsService.updateFavorite).toHaveBeenCalled();
      expect(songsMockResponse[0].favorite).toBe(false);
    });
  });
});
