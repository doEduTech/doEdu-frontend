import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.scss'],
})
export class RoleSelectionComponent {
  public formValidated = false;
  public form = new UntypedFormGroup({
    role: new UntypedFormControl(null, Validators.required),
    areConditionsAndTermsAccepted: new UntypedFormControl(null, [
      Validators.requiredTrue,
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  public setRole(): void {
    this.formValidated = true;
    if (this.form.valid) {
      const chosenRole = this.form.value.role;
      this.authService.setRole(chosenRole).subscribe(() => {
        this.navigateToBlockchainAccountConfig();
      });
    }
  }

  private navigateToBlockchainAccountConfig(): void {
    this.router.navigate(['user', 'blockchain']);
  }
}
