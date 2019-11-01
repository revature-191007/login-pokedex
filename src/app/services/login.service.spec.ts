import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileComponent } from 'src/app/components/profile/profile.component';


/**
 * Describe block is an organizational nesting block
 * to compose individual unit tests
 */
describe('LoginService', () => {
  let mockRouter: Router;
  let loginService: LoginService;

  // beforeEach runs before each individual test within this
  // description block
  // are also beforeAll, afterAll, afterEach
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([{
          path: 'profile',
          component: ProfileComponent
        }]),
      ],
      declarations: [
        ProfileComponent
      ]
    });
    mockRouter = TestBed.get(Router);
    loginService = TestBed.get(LoginService);
  });

  // it(...) - is a function that accepts a callback that acts
  // as an individual test
  // it('should be created', () => {
  // xit('should be created', () => { // ignored test
  it('should be created', () => { // focused test
    const service: LoginService = TestBed.get(LoginService);
    // expect(obj/val).toBe-
    // effectively same expressions as JUnit with assert
    expect(service).toBeTruthy();
  });

  describe('login', () => {

    fit('should navigate when valid credentials are provided', fakeAsync(() => {
      // Creating a spy which will allow us to verify calls to the 
      // mockRouter.navigateByUrl method
      const navigateSpy = spyOn(mockRouter, 'navigateByUrl');

      // Call the service's login method
      loginService.login({
        email: 'abby@aol.com', password: 'abs'
      });

      // Force an asynchronous tick, so async tasks can complete
      tick();

      // Confirm that the service method called router.navigateByUrl('/profile');
      expect(navigateSpy).toHaveBeenCalledWith('/profile');

    }));

    fit('should not navigate when invalid credentials are provided', fakeAsync(() => {
      // Creating a spy which will allow us to verify calls to the 
      // mockRouter.navigateByUrl method
      const navigateSpy = spyOn(mockRouter, 'navigateByUrl');

      // Call the service's login method with bad credentials
      loginService.login({
        email: 'abby@aol.', password: 'abs'
      });

      // Force an asynchronous tick, so async tasks can complete
      tick();

      // Confirm that the service method was not called
      expect(navigateSpy).not.toHaveBeenCalled();

    }));
  });
});
