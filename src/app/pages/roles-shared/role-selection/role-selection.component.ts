import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.scss'],
})
export class RoleSelectionComponent {
  public formValidated = false;
  public form = new FormGroup({
    role: new FormControl(null, Validators.required),
    areConditionsAndTermsAccepted: new FormControl(null, [
      Validators.requiredTrue,
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  public setRole(): void {
    this.formValidated = true;
    if (this.form.valid) {
      const chosenRole = this.form.value.role;
      this.authService.setRole(chosenRole).subscribe(() => {
        this.router.navigate([chosenRole, 'dashboard']);
      });
    }
  }
}
