import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from '@services/auth.service';
import { TokenBalanceService } from '@services/token-balance.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  secondsToNextUpdate: number | undefined;
  balance: number | undefined;
  balanceSub: Subscription | undefined;

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.subBalance();
  }

  ngOnDestroy() {
    if (this.balanceSub) {
      this.balanceSub.unsubscribe();
    }
  }

  public logOut(): void {
    this.authService.logout();
  }

  private subBalance(): void {
    this.balanceSub = this.tokenBalanceService.tokenBalance$.subscribe(
      (val) => {
        this.balance = val;
      }
    );
  }
}
