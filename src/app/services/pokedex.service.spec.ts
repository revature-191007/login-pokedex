import { TestBed, getTestBed, tick } from '@angular/core/testing';

import { PokedexService } from './pokedex.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

describe('PokedexService', () => {

  // Declare TestBed configuration
  let injector: TestBed;

  // Declare service to test
  let service: PokedexService;

  // Declare mocks
  let mockHttp: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Configure testing module to use the HttpTestModule
      imports: [HttpClientTestingModule],
    });

    // Assign references
    injector = getTestBed();
    service = injector.get(PokedexService);
    mockHttp = injector.get(HttpTestingController);
  });

  afterEach(() => {
    // Verify that all issued requests have been matched
    mockHttp.verify();
  });

  describe('search', () => {

    it('should issue http request and pipe data to $pokedata', done => {
      const payload = {
        name: 'test-pokemon',
        sprites: {
          front_default: 'test-string',
        },
        id: 1
      };

      service.$pokeData.subscribe(data => {
        expect(data).toEqual(payload);
        // Done once data is returned
        done();
      });

      service.search('pikachu');


      // Anticipate response              https://pokeapi.co/api/v2/pokemon/pikachu
      const request = mockHttp.expectOne(`https://pokeapi.co/api/v2/pokemon/pikachu`,
          'Should send a request to API with parameter value embedded');

      // Flush data to be issued to data pipeline
      request.flush(payload);
      // tick();
    });
  });



  it('should be created', () => {
    const service: PokedexService = TestBed.get(PokedexService);
    expect(service).toBeTruthy();
  });
});
