import { Injectable } from '@angular/core';

import { io, Socket } from 'socket.io-client';
import { BehaviorSubject } from 'rxjs';

import { AuthService } from './auth.service';
import { environment } from '@env/environment';
import { IBlockchainAccountStructure } from '@interfaces/blockchain-account.interface';
import { filter } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BlockchainTransactionsGatewayService {
  public currentAccountData = new BehaviorSubject<
    IBlockchainAccountStructure | undefined
  >(undefined);
  private connection: Socket | undefined;

  constructor(private authService: AuthService) {
    this.disconnectOnLogout();
  }

  // connection is initialized by the BalanceService if User has blochain address initialized
  // otherwise it waits for the blockachn account initialization action
  public connect(): void {
    if (
      this.authService.decodedAccessToken &&
      this.authService.decodedAccessToken.blockchainAddress
    ) {
      this.connection = io(environment.wsAddress, {
        extraHeaders: {
          Authorization: `Bearer ${this.authService.getToken()}`,
        },
      });

      this.subAccountChanges();
      this.subDisconnection();
    }
  }

  private disconnectOnLogout(): void {
    this.authService.isAuthenticatedSubject$
      .pipe(filter((val) => !val))
      .subscribe(() => {
        if (this.connection) {
          this.currentAccountData.next(undefined);
          this.connection.disconnect();
        }
      });
  }

  private subDisconnection(): void {
    if (this.connection) {
      this.connection.on('disconnect', () => {
        console.log('Disconnected');
      });
    }
  }

  private subAccountChanges(): void {
    if (this.connection) {
      this.connection.on('account', (data: IBlockchainAccountStructure) => {
        this.currentAccountData.next(data);
      });
    }
  }

  public getFaucetTokens(): void {
    if (this.connection) {
      this.connection.emit('transaction:getFaucetTokens');
    }
  }
}
