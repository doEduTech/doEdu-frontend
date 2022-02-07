import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IBlockchainAccountForm } from '@interfaces/blockchain-account.interface';

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  private baseEndpoint = `${environment.apiUrl}/blockchain`;

  constructor(private http: HttpClient) {}

  public getGeneratedPassphrases(): Observable<string> {
    const endpoint = `${this.baseEndpoint}/get-generated-passphrases`;
    return this.http.get<string>(endpoint);
  }

  public initializeAccount(
    passphrase: string
  ): Observable<IBlockchainAccountForm & { access_token: string }> {
    const endpoint = `${this.baseEndpoint}/initialize-account`;
    return this.http.post<IBlockchainAccountForm & { access_token: string }>(
      endpoint,
      { passphrase }
    );
  }

  public purchaseFaucetTokens(): Observable<void> {
    const endpoint = `${this.baseEndpoint}/get-faucet-tokens`;
    return this.http.get<void>(endpoint);
  }

  public transferTokens(
    recipientUserId: string,
    amount: number,
    passphrase: string
  ): Observable<void> {
    const endpoint = `${this.baseEndpoint}/transfer-tokens`;
    return this.http.post<void>(endpoint, {
      recipientUserId,
      amount,
      passphrase,
    });
  }
}
