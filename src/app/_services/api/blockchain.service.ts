import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IBlockchainAccount } from '@interfaces/blockchain-account.interface';

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
  ): Observable<IBlockchainAccount & { access_token: string }> {
    const endpoint = `${this.baseEndpoint}/initialize-account`;
    return this.http.post<IBlockchainAccount & { access_token: string }>(
      endpoint,
      { passphrase }
    );
  }
}
