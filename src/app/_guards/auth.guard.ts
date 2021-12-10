import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  Router,
} from '@angular/router';
import { Location } from '@angular/common';

import { AuthService } from '@services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private router: Router,
    private authService: AuthService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const path = route.url[0].path;
    return this.isAllowed(path);
  }

  public canLoad(route: Route): boolean {
    const path = route.path || '';
    return this.isAllowed(path);
  }

  private isAllowed(routePath: string): boolean {
    const value = this.redirecIfRequired(routePath);
    console.log('value', this.route);
    return value;
  }

  private redirecIfRequired(routePath: string): boolean {
    const isUserAuthenticated = this.authService.isLoggedIn();

    if (isUserAuthenticated) {
      console.log('User is Authenticated');
      const userRole = this.authService.decodedAccessToken?.role;
      if (userRole) {
        console.log('has role');
        if (
          !routePath.startsWith(userRole) ||
          !routePath.startsWith('market')
        ) {
          console.log('is on wrong route');
          this.router.navigate([userRole, 'dashboard']);
          return false;
        }
      } else if (routePath !== 'role-selection') {
        console.log('has no role');
        this.router.navigate(['role-selection']);
        return false;
      }
    } else if (!routePath.startsWith('public')) {
      console.log('User is not Authenticated');
      this.router.navigate(['public', 'landing-page']);
      return false;
    }
    return true;
  }
}
