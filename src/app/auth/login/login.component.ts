import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private authService: AuthService) { 
 //   this.authService.user = {
 //     username: 'David',
 //   } as any;
//
 //   this.router.navigate(['/']);
 }
loginHandler(): void {
   this.authService.user = {
     username: 'David',
   } as any;

   const returnUrl = this.activatedRoute.snapshot.queryParams[`returnUrl`] || '/';
   console.log(returnUrl)
   this.router.navigate([returnUrl]);
 }
}






