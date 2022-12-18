import { ValidatorFn } from "@angular/forms";

export function appEmailValodator(domains: string[]): ValidatorFn  {
  //  /^[^@]{4,}@[^@]{3,}\.(bg|com|net\eu)$/
  const domainString = domains.join('|');
  const re = new RegExp (`^[^@]{4,}@[^@]{3,}\.(${domainString})$`);
  return (control) => {
    return (control.value === '' || re.test(control.value) ? null: {appEmailValodator:true});
  }

}