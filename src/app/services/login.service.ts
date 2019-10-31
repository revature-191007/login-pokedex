import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/* Note that services will generally have this decorator */
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  currentlyLoggedIn = false;

  private validCredentials  = [{
    email: 'abby@aol.com',
    password: 'abs'
  }, {
    email: 'billy@biceps.com',
    password: 'biceps'
  }, {
    email: 'cindy@cinderblock.com',
    password: 'cider'
  }];

  // Assuming there is a service called 'Router' how
  // would it be injected?
  constructor(private router: Router) { }

  login(credentials: {email: string, password: string}) {
    const valid = this.validCredentials.some(obj => {
      return obj.email === credentials.email &&
          obj.password === credentials.password;
    });

    if (valid) {
      this.currentlyLoggedIn = true;
      this.router.navigateByUrl('/profile');
    } else {
      // bad credentials
      return false;
    }

  }

}
