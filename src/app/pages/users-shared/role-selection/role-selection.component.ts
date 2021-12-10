import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.component.html',
  styleUrls: ['./role-selection.component.scss'],
})
export class RoleSelectionComponent implements OnInit {
  public formValidated = false;
  public form = new FormGroup({
    role: new FormControl(null, Validators.required),
    areConditionsAndTermsAccepted: new FormControl(null, [
      Validators.requiredTrue,
    ]),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  public login(): void {
    this.formValidated = true;
    console.log('form', this.form);
    if (this.form.valid) {
      // send role chosen request
    }
  }
}
