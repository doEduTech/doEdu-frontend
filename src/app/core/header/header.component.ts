import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

import { TokenBalanceService } from '@services/token-balance.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {

  constructor(
    public tokenBalanceService: TokenBalanceService,
    private router: Router,
    public auth: AuthService,
  ) {}

  loginWithRedirect() {
    this.auth.loginWithRedirect();
  }

}
