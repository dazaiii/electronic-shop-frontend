import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Registration } from 'src/models/register.model';
import { UserHttpService } from '../user.http.service';

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPageComponent implements OnInit {
  constructor(fb: FormBuilder, private userService: UserHttpService) {
    this.registrationForm = fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  registrationForm: FormGroup;

  errorMessage: string = '';

  ngOnInit(): void {}

  get username() {
    return this.registrationForm.get('username');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  register() {
    const registration: Registration = {
      login: this.username?.value,
      email: this.email?.value,
      password: this.password?.value,
    };
    this.userService.register(registration).subscribe(
      () => {
        this.errorMessage = 'Successfully registered';
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'User already exists';
      }
    );
  }
}
