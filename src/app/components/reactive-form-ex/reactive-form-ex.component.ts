import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-ex',
  templateUrl: './reactive-form-ex.component.html',
  styleUrls: ['./reactive-form-ex.component.scss']
})
export class ReactiveFormExComponent implements OnInit {

  formLock = true;

  profile: Profile = {
    firstName: "",
    lastName: "",
    role: "",
    id: null
  };

  // profileForm = this.formBuilder.group({
  //   firstName: [this.profile.firstName, Validators.required],
  //   lastName: [this.profile.lastName],
  //   role: [this.profile.role],
  //   id: [this.profile.id]
  // })

  profileForm = this.formBuilder.group({
    firstName: [{value: this.profile.firstName, disabled: true}, Validators.required],
    lastName: [{value: this.profile.lastName, disabled: true}],
    role: [{value: this.profile.role, disabled: true}],
    id: [{value: this.profile.id, disabled: true}]
  })

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    // Simulating going and getting data
    this.getCurrentProfile();
  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  getCurrentProfile() {
    setTimeout( () => {
      this.profile = {
        firstName: "Christian",
        lastName: "Brooks",
        role: "Admin",
        id: "459722",
      }
      this.profileForm.setValue(this.profile);
      this.enableForm(true, this.profileForm);
    }, 3000)
  }

  enableForm(enable: boolean, formGroup) {
    for (const property in formGroup.controls) {
      if (enable) {
        formGroup.controls[property].enable();
      } else {
        formGroup.controls[property].disable();
      }
    }
  }
}

export class Profile {
  firstName: String;
  lastName: String;
  role: String;
  id: String;
}
