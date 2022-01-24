import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { IBlockchainAccountStructure } from '@interfaces/blockchain-account.interface';
import { AuthService } from './auth.service';
import { BlockchainTransactionsGatewayService } from './blockchain-transactions.service';

@Injectable({
  providedIn: 'root',
})
export class TokenBalanceService {
  constructor(
    private blockchainTransactionsGatewayService: BlockchainTransactionsGatewayService,
    private authService: AuthService
  ) {
    this.subscribeAccountBalance();
    this.clearDataAfterUnautenthicatin();
  }

  public tokenBalance$ = new BehaviorSubject<number>(0);

  private clearDataAfterUnautenthicatin(): void {
    this.authService.isAuthenticatedSubject$
      .pipe(filter((val) => !val))
      .subscribe(() => this.tokenBalance$.next(0));
  }

  private subscribeAccountBalance(): void {
    this.authService.isAuthenticatedSubject$
      .pipe(filter((val) => !!val))
      .subscribe(() => {
        this.blockchainTransactionsGatewayService.connect();
        this.subcribeBlochainAccountChange();
      });
  }

  private subcribeBlochainAccountChange(): void {
    this.blockchainTransactionsGatewayService.currentAccountData.subscribe(
      (val: IBlockchainAccountStructure | undefined) => {
        if (val !== undefined) {
          this.tokenBalance$.next(val.token.balance);
        }
      }
    );
  }
}
