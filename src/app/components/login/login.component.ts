import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // Input values
  inputEmail = '';
  inputPassword = '';

  // Flag set to true when user supplies invalid input
  invalidInput = false;

  /*
  Dependency injection in Angular uses 'constructor
  injection'. This means dependencies will be supplied
  as constructor parameters automatically. In Angular's
  case if we supply a private dependency to an
  Angular component or service, it will automatically
  be provided and assigned.
  */
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  submit() {
    const credentials = {
      email: this.inputEmail,
      password: this.inputPassword
    };
    if (!this.loginService.login(credentials)) {
      this.invalidInput = true;
    }
  }
}
