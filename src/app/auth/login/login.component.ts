import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { appEmailDomains } from 'src/app/shared/guards/constants';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  appEmailDomains = appEmailDomains;
 
  @ViewChild(
    //'form', //разликата между form i NgForm nikakwa зависи какво има на HTML
    NgForm,
    {static: true}
  ) form!: ElementRef<HTMLInputElement>;

  //@ViewChild('files', {static: true})  files!:ElementRef<HTMLInputElement>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { 
 //   this.authService.user = {
 //     username: 'David',
 //   } as any;
//
 //   this.router.navigate(['/']);
 }
 loginHandler (form: NgForm): void {
   //console.log(this.files.nativeElemnt.files)
  if(form.invalid) {return;}
  const { email, password} = form.value;
  this.authService.login(email!, password!)
   .subscribe(user => {
    //console.log(user)

    //this.authService.user = user; махнах го и от regester защото го направихме в authaervice  s   subscription
    this.router.navigate(['/slope/recent']);
    });

   const returnUrl = this.activatedRoute.snapshot.queryParams[`returnUrl`] || '/';
   
   this.router.navigate([returnUrl]);
 }
}






