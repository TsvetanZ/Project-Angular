import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/guards/constants';
import { appEmailValodator, sameValueGroupValidator } from 'src/app/shared/validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form = this.fb.group({
    email: ['', [Validators.required, appEmailValodator(appEmailDomains)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(5)]],
      rePassword: []
    }, {
      validators: [sameValueGroupValidator('password', 'rePassword')]
    })
  });

  constructor(private fb: FormBuilder) { }

  registerHandler() {
    console.log(this.form.value)

  }



}
