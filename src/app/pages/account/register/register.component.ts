import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';
import { checkPasswords } from './utils';
import { SnackBarService } from '@services/shared/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  public showEmailError = false;
  public showPasswordsDontMatchError = false;
  public form = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      repeatedPassword: new FormControl('', Validators.required),
    },
    checkPasswords()
  );

  constructor(
    private snackBarService: SnackBarService,
    private authService: AuthService,
    private router: Router
  ) {}

  public onEmailBlur(): void {
    const email = this.form.get('email')?.value;
    this.showEmailError =
      email && !/^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/.test(email);
  }

  public onPasswordBlur(): void {
    const password = this.form.get('password')?.value;
    const repeatedPassword = this.form.get('repeatedPassword')?.value;
    this.showPasswordsDontMatchError = !!(
      password &&
      repeatedPassword &&
      password !== repeatedPassword
    );
  }

  public register(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.register(email, password).subscribe(() => {
        this.nagigateToLoginView();
        this.showSuccessMessage();
      });
    }
  }

  private showSuccessMessage(): void {
    this.snackBarService.openSnackBar(
      'New account sucesfully created. You can now login in',
      'success'
    );
  }

  private nagigateToLoginView(): void {
    this.router.navigate(['account', 'login']);
  }
}
