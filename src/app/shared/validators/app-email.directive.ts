import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { appEmailValodator } from './app-email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
     {
       provide: NG_VALIDATORS,
       useExisting: AppEmailDirective,
       multi: true
     } 
  ]
})

export class AppEmailDirective implements OnChanges, Validator {
  @Input () appEmail: string[] = [];

  validator: ValidatorFn = () => null;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    const emailChange = changes ['appEmail'];
    if (emailChange) {
      this.validator= appEmailValodator(emailChange.currentValue);
    }
    
  }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }


}
