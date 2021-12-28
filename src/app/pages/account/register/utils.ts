import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

// TODO: passwords matching check
export function checkPasswords(): ValidatorFn | null {
  return null;
  // return (group: FormGroup): ValidationErrors | null => {
  //   const password = group.get('password').value;
  //   const confirmPassword = group.get('confirmPassword').value;
  //   return password === confirmPassword ? null : { passwordsDontMatch: true };
  // };
}
