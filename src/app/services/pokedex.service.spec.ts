import { TestBed, getTestBed } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { PokeData } from 'src/app/components/models/PokeData';

describe('PokedexService', () => {
  // Declaring the testbed
  let injector: TestBed;

  // Service we will test
  let pokedexService: PokedexService;

  // Mock Http controller, we can use to control HttpClient
  let mockHttp: HttpTestingController;

  beforeEach(
    () => {
      TestBed.configureTestingModule({});
      injector = getTestBed();
      pokedexService = injector.get(PokedexService);
      mockHttp = injector.get(HttpTestingController);
    });

  it('should be created', () => {
    const service: PokedexService = TestBed.get(PokedexService);
    expect(service).toBeTruthy();
  });

  /*
    We can nest multiple tests regarding the 'search' method
    into a new describe block
  */
  describe('search', () => {

    afterEach(() => {
      mockHttp.verify();
    });

    it('should issue an http request and pipe data to $pokedata', done => {
      // Declare data that will be returned from mock HTTP call
      const payload: PokeData = {
        id: 1,
        name: 'test-pokemon-name',
        sprites: {
          front_default: 'img-address'
        }
      };

      // Subscribe to data pipeline
      pokedexService.$pokeData.subscribe((data) => {
        expect(data).toEqual(payload, 'Compare pipeline data to HTTP response data - they should be the same');
        // Mark test as complete
        done();
      });

      // Trigger search method
      pokedexService.search('pikachu');

      // 'Mock request' object, which allows us to confirm the request was 'sent'
      const request = mockHttp.expectOne(`https://pokeapi.co/api/v2/pokemon/pikachu`,
          'Should send request to poke api server for pikachu');

      // Then we can flush data as a response, using the flush method
      request.flush(payload);
    });
  });
});
