import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChangePassword } from 'src/models/changePassword.model';
import { PersonalData } from 'src/models/personalData.model';
import { PersonalDataService } from '../personal-data.http.service';
import { UserHttpService } from '../user.http.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit {
  passwordForm: FormGroup;

  personalDataForm: FormGroup;

  constructor(
    fb: FormBuilder,
    private personalDataService: PersonalDataService,
    private userService: UserHttpService
  ) {
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
      phone: fb.control(''),
    });
  }

  personalData: PersonalData;

  ngOnInit(): void {
    this.getPersonalData();
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

  get phone() {
    return this.personalDataForm?.get('phone');
  }

  checkPasswords(): boolean {
    let pass = this.newPassword?.value;
    let confirmPass = this.repeatedPassword?.value;
    // console.log(
    //   pass,
    //   confirmPass,
    //   pass === confirmPass ? null : { notSame: true }
    // );
    return pass !== confirmPass;
  }

  getPersonalData() {
    this.personalDataService.getPersonalData().subscribe((personalData) => {
      this.personalData = personalData;
      this.personalDataForm.reset(this.personalData);
    });
  }

  updateData() {
    this.personalData = this.personalDataForm.value;
    this.personalDataService
      .updatePersonalData(this.personalDataForm.value)
      .subscribe();
  }

  changePassword() {
    const changePassword: ChangePassword = {
      password: this.password?.value,
      newPassword: this.newPassword?.value,
    };
    this.userService.changePassword(changePassword).subscribe(
      () => {},
      (error) => {
        console.log(error);
      }
    );
  }
}
