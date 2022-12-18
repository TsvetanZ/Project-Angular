import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-slope',
  templateUrl: './new-slope.component.html',
  styleUrls: ['./new-slope.component.css']
})
export class NewSlopeComponent  {

  constructor() { }

  newSlopeHandler(form: NgForm) :void {
    if(form.invalid) {return;}
    console.log(form.value);
  }


}
