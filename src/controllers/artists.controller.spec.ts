// controllers
import { ArtistsController } from './artists.controller';

// services
import { ArtistsService } from '../services/artists.service';

// interfaces
import { IArtists } from '../interfaces/artists.interface';

// others
import { Model } from 'mongoose';

const artistsMockResponse = [
    {
        artist: "Hello World",
        albums:[
            {
                title: "Blah Album",
                songs: [
                    {
                        "title": "Blah",
                        "path": "https://www.w3schools.com/tags/horse.mp3"
                    }
                ]
            }
        ]       
    }
]

class ArtistsMockService {
    async getArtists(): Promise<any> {
        return artistsMockResponse; 
    }
}

describe('ArtistsController', () => {
  let artistsController: ArtistsController;
  let artistsService: ArtistsService;
  let artistsModel: Model<IArtists>

  beforeEach(() => {
    artistsService = new ArtistsService(artistsModel);
    artistsController = new ArtistsController(artistsService);
  });

  describe('artists', () => {
    it('should retrieve artists', async () => {
        // ARRANGE
        const artistsMockService = new ArtistsMockService();
        jest.spyOn(artistsService, 'getArtists').mockImplementation(artistsMockService.getArtists);

        // ACT
        const response = await artistsController.getArtists();

        // ASSERT
        expect(artistsService.getArtists).toBeCalled();
        expect(response).toBe(artistsMockResponse);
    });
  });
});