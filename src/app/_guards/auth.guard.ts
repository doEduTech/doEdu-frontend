import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
    private location: Location
  ) {}

  canActivate(): boolean {
    return this.isAllowed();
  }

  canLoad(): boolean {
    return this.isAllowed();
  }

  private isAllowed(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();

    console.log('location', this.location);
    if (isLoggedIn) {
      const userData = this.authService.decodedAccessToken;
      // const currentModule = this.location
      // if (userData && userData.role === 'teacher' && )
    }

    if (!isLoggedIn) {
      this.navigateToLandingPage();
      return false;
    }
    return true;
  }

  private navigateToLandingPage(): void {
    this.router.navigate(['public', 'landing-page']);
  }
}
