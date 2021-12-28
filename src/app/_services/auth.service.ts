import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import jwt_decode from 'jwt-decode';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ERole, IDecodedToken } from '@interfaces/auth.interface';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);

  public get hasValidAccessToken(): boolean {
    const encodedToken = this.getToken();
    if (!encodedToken) {
      return false;
    }

    const accessTokenExpiration = this.getExpiration();
    const whetherAccessTokenExistedAndExpired =
      (encodedToken && !accessTokenExpiration) ||
      moment().isBefore(accessTokenExpiration);

    return whetherAccessTokenExistedAndExpired;
  }

  public get decodedAccessToken(): IDecodedToken | null {
    const token = this.getToken();
    if (token) {
      return jwt_decode(token);
    }
    return null;
  }

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticatedSubject$.next(this.isLoggedIn());
  }

  public login(
    username: string,
    password: string
  ): Observable<{ access_token: string }> {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/login`, { username, password })
      .pipe(
        tap((res) => {
          this.setSession(res);
        })
      );
  }

  public register(email: string, password: string): Observable<void> {
    return this.http.post<any>(`${environment.apiUrl}/auth/register`, {
      email,
      password,
    });
  }

  public setRole(role: ERole): Observable<{ access_token: string }> {
    return this.http
      .post<any>(`${environment.apiUrl}/auth/set-role`, {
        role,
      })
      .pipe(
        tap((res) => {
          this.setSession(res);
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('access_token');
    this.router.navigate(['/market']);
  }

  public isLoggedIn(): boolean {
    return this.hasValidAccessToken;
  }

  public isLoggedOut(): boolean {
    const token = this.getToken();
    return !token || !this.isLoggedIn();
  }

  public getExpiration(): any {
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

  public getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  private setSession(tokens: { access_token: string }): void {
    localStorage.setItem('access_token', tokens.access_token);
  }
}
