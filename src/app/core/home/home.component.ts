import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  get isLoggedIn() {
    return this.authService.isloggedIn;
  }

  constructor(private authService: AuthService) { }

 

}
