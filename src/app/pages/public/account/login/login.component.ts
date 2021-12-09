import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public areCredentialsIncorrect = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.handleFormInput();
  }

  public login(): void {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.authService.login(email, password).subscribe(
        () => {
          this.authService.isAuthenticatedSubject$.next(true);
          this.nagigateToNextView();
        },
        () => {
          this.areCredentialsIncorrect = true;
        }
      );
    }
  }

  private handleFormInput(): void {
    this.form.valueChanges.subscribe(
      () => (this.areCredentialsIncorrect = false)
    );
  }

  private nagigateToNextView(): void {
    const userRole = this.authService.decodedAccessToken?.role;

    if (userRole === 'teacher') {
      this.router.navigate(['teacher', 'dashboard']);
    } else if (userRole === 'learner') {
      this.router.navigate(['learner', 'dashboard']);
    } else if (userRole === 'admin') {
      this.router.navigate(['admin', 'dashboard']);
    } else {
      this.router.navigate(['select-role']);
    }
  }
}
