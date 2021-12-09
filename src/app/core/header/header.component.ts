import { Component } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { TokenBalanceService } from '@services/token-balance.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public tokenBalanceService: TokenBalanceService,
    public authService: AuthService
  ) {}

  public logOut(): void {
    this.authService.logout();
  }
}
