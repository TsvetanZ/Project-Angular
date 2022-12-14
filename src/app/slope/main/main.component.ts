import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  get isloggedIn() {
    return this.authServise.isloggedIn;
  }

  constructor(private authServise: AuthService) { }

 

}
