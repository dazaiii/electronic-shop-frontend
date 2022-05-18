import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { PersonalData } from 'src/models/personalData.model';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  passwordForm: FormGroup;

  personalDataForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.passwordForm = fb.group({
      password: fb.control('', [Validators.required]),
      newPassword: fb.control('', [Validators.required]),
      repeatedPassword: fb.control('', [Validators.required]),
    });

    this.personalDataForm = fb.group({
      name: fb.control(''),
      surname: fb.control(''),
      address: fb.control(''),
      city: fb.control(''),
      zipCode: fb.control(''),
      phoneNumber: fb.control(''),
    });
  }

  personalData: PersonalData;

  ngOnInit(): void {
    this.personalData = this.getPersonalData();
  }

  get password() {
    return this.passwordForm?.get('password');
  }

  get newPassword() {
    return this.passwordForm?.get('newPassword');
  }

  get repeatedPassword() {
    return this.passwordForm?.get('repeatedPassword');
  }

  get name() {
    return this.personalDataForm?.get('name');
  }

  get surname() {
    return this.personalDataForm?.get('surname');
  }

  get address() {
    return this.personalDataForm?.get('address');
  }

  get zipCode() {
    return this.personalDataForm?.get('zipCode');
  }

  get city() {
    return this.personalDataForm?.get('city');
  }

  get phoneNumber() {
    return this.personalDataForm?.get('phoneNumber');
  }

  checkPasswords(): boolean {
    let pass = this.newPassword?.value;
    let confirmPass = this.repeatedPassword?.value;
    console.log(
      pass,
      confirmPass,
      pass === confirmPass ? null : { notSame: true }
    );
    return pass !== confirmPass;
  }

  getPersonalData() {
    //mock
    let personalData = {
      name: 'John',
      surname: 'Johanson',
      address: 'Johansonowo 22/33',
      city: 'Johansonów',
      zipCode: '33-333',
      phoneNumber: '324-829-826',
    };
    this.personalDataForm.reset(personalData);
    return personalData;
  }

  updateData() {
    this.personalData = this.personalDataForm.value;
    // this.personalDataService.updatePersonalData(this.personalDataForm.value).subscribe((personalData) => {
    //   this.personalData = personalData;
    // })
  }

  changePassword() {}
}
