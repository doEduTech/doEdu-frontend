import { Injectable } from '@angular/core';

import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IBlockchainAccountStructure } from '@interfaces/blockchain-account.interface';
import { AuthService } from './auth.service';
import { BlockchainTransactionsGatewayService } from './blockchain-transactions.service';

@Injectable({
  providedIn: 'root',
})
export class TokenBalanceService {
  private accountSub: Subscription | undefined;

  constructor(
    private blockchainTransactionsGatewayService: BlockchainTransactionsGatewayService,
    private authService: AuthService
  ) {
    this.subscribeAccountBalance();
    this.clearDataAfterLogout();
  }

  public tokenBalance$ = new BehaviorSubject<number | undefined>(undefined);

  private clearDataAfterLogout(): void {
    this.authService.isAuthenticatedSubject$
      .pipe(filter((val) => !val))
      .subscribe(() => {
        this.tokenBalance$.next(undefined);
        if (this.accountSub) {
          this.accountSub.unsubscribe();
        }
      });
  }

  private subscribeAccountBalance(): void {
    this.authService.isAuthenticatedSubject$
      .pipe(filter((val) => !!val))
      .subscribe(() => {
        if (this.authService.decodedAccessToken) {
          this.blockchainTransactionsGatewayService.connect();
          this.subcribeBlochainAccountChange();
        }
      });
  }

  private subcribeBlochainAccountChange(): void {
    this.accountSub = this.blockchainTransactionsGatewayService.currentAccountData.subscribe(
      (val: IBlockchainAccountStructure | undefined) => {
        if (val !== undefined && val !== null) {
          this.tokenBalance$.next(val.token.balance);
        }
      }
    );
  }
}
