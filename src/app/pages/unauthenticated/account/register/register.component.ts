import { Component, OnInit } from '@angular/core';
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
export class RegisterComponent implements OnInit {
  form = new FormGroup(
    {
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    },
    checkPasswords()
  );

  constructor(
    private snackBarService: SnackBarService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  register(): void {
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
    this.router.navigate(['public', 'account', 'login']);
  }
}
