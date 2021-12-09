import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IDecodedToken } from '@interfaces/auth.interface';
import { environment } from '@env/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);

  get hasValidAccessToken(): boolean {
    const encodedToken = this.getToken();

    const accessTokenExpiration = this.getExpiration();

    const whetherAccessTokenExistedAndExpired =
      (encodedToken && !accessTokenExpiration) ||
      moment().isBefore(accessTokenExpiration);

    return whetherAccessTokenExistedAndExpired;
  }

  get decodedAccessToken(): IDecodedToken | null {
    try {
      const token = this.getToken();
      if (token) {
        return jwt_decode(token);
      }
      return null;
    } catch (Error) {
      return null;
    }
  }

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticatedSubject$.next(this.isLoggedIn());
  }

  login(username: string, password: string): Observable<any> {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap((res) => {
          this.setSession(res);
        })
      );
  }

  register(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, {
      email,
      password,
    });
  }

  logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/public', 'landing-page']);
  }

  isLoggedIn(): boolean {
    return this.hasValidAccessToken;
  }

  isLoggedOut(): boolean {
    const token = this.getToken();
    return !token || !this.isLoggedIn();
  }

  getExpiration(): any {
    const encodedToken = this.getToken();
    if (!encodedToken) {
      return null;
    }
    if (this.decodedAccessToken) {
      const expiresAt = new Date(this.decodedAccessToken.exp * 1000);
      return moment(expiresAt);
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private setSession(tokens: { access_token: string }): void {
    localStorage.setItem('access_token', tokens.access_token);
  }
}
