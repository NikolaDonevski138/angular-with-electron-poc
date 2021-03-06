import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user/user.service';

@Component({
  selector: 'app-login',
  providers: [UserService],
  styleUrls: ['./login.component.css'],
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  @ViewChild('username') username: any;
  @ViewChild('password') password: any;
  user: User;
  isLoggingIn = true;
  submitFormText: string = this.isLoggingIn ? 'Sign in' : 'Sign up';
  changeSignInOrSignUpText: string = this.isLoggingIn
    ? 'Sign up'
    : 'Back to login';

  constructor(private router: Router, private userService: UserService) {
    this.user = new User('', '');
  }

  ngOnInit() {}

  submit() {
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.user = new User(
      this.username.nativeElement.value,
      this.password.nativeElement.value
    );
    this.userService.login(this.user).subscribe(
      () => this.router.navigate(['home']),
      (exception) => {
        if (exception.error && exception.error.description) {
          alert(exception.error.description);
        } else {
          alert(exception);
        }
      }
    );
  }

  signUp() {
    this.user = new User(
      this.username.nativeElement.value,
      this.password.nativeElement.value
    );
    this.userService.register(this.user).subscribe(
      () => {
        alert('Your account was successfully created.');
        this.toggleDisplay();
      },
      (exception) => {
        if (exception.error && exception.error.description) {
          alert(exception.error.description);
        } else {
          alert(exception);
        }
      }
    );
  }

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
    this.submitFormText = this.isLoggingIn ? 'Sign in' : 'Sign up';
    this.changeSignInOrSignUpText = this.isLoggingIn
      ? 'Sign up'
      : 'Back to login';
  }
}
