import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { appEmailDomains } from 'src/app/shared/guards/constants';
import { IUser } from 'src/app/shared/interfaces';
import { appEmailValodator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  showEditMode = false;
  formSubmitted = false;

  get user( ) {
    const {username, email} = this.authService.user!;
    return {
      username,
      email
    }
  }

  form = this.fb.group({
    email: ['', [Validators.required, appEmailValodator(appEmailDomains)]],
    username: ['', [Validators.required, Validators.minLength(5)]],
   
  });

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form.setValue(this.user);
   }

    toggleEditMode(): void {
      this.showEditMode = !this.showEditMode;
      if(this.showEditMode) {
        this.formSubmitted = false;
      }
    }

    saveProfile(): void {
      this.formSubmitted = true;
        if(this.form.invalid) {return;}
        const { username, email } = this.form.value;
        this.authService.user = {
          username, email
        } as any;
        this.toggleEditMode();
    }


}
