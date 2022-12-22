import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SlopeService } from '../slope.service';

@Component({
  selector: 'app-new-slope',
  templateUrl: './new-slope.component.html',
  styleUrls: ['./new-slope.component.css']
})
export class NewSlopeComponent  {

  constructor(private slopeService: SlopeService, private router: Router) { }

  newSlopeHandler(form: NgForm) :void {
    if(form.invalid) {return;}
    //console.log(form.value);
    const {themeName, postText } = form.value;

    this.slopeService.createSlope(themeName, postText)
    .subscribe(() => {
      this.router.navigate(['/slope/recent'])
    })
  }


}
