import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserHttpService } from '../user.http.service';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(fb: FormBuilder, private userHttpService: UserHttpService) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginForm: FormGroup;

  ngOnInit(): void {}

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.userHttpService
      .login(this.loginForm.value.username, this.loginForm.value.password)
      .pipe(
        catchError((error) => {
          if (error.error instanceof ErrorEvent) {
            console.log(`Error: ${error.error.message}`);
          } else {
            console.log(`Error: ${error.message}`);
          }
          return of();
        })
      )
      .subscribe((x) => console.log(x));
  }
}
