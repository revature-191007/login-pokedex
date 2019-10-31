import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  constructor(private router: Router, private httpClient: HttpClient) { }

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

  loginHttp(credentials: {email: string, password: string}) {
    const loginCredentials = {
      username: credentials.email,
      password: credentials.password
    };
    const url = 'http://localhost:8080/second-webapp/session';
    this.httpClient.post(url, loginCredentials)
        .subscribe((data) => {
          console.log(data);
        });
  }
}
