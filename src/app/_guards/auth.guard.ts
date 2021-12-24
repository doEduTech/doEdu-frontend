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
  constructor(private router: Router, private authService: AuthService) {}

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const path = route.url[0].path;
    return this.isAllowed(path);
  }

  public canLoad(route: Route): boolean {
    const path = route.path || '';
    return this.isAllowed(path);
  }

  private isAllowed(routePath: string): boolean {
    const isUserAuthenticated = this.authService.isLoggedIn();
    const userRole =
      this.authService.decodedAccessToken &&
      this.authService.decodedAccessToken.role;

    if (isUserAuthenticated) {
      if (userRole) {
        if (
          routePath.startsWith('market') ||
          (routePath.startsWith('teacher') && userRole === 'teacher') ||
          (routePath.startsWith('learner') && userRole === 'learner')
        ) {
          return true;
        } else {
          // redirect to role dashboard
          this.router.navigate([userRole, 'dashboard']);
          return false;
        }
      } else {
        if (routePath.startsWith('role-selection')) {
          return true;
        } else {
          // redirect to role selection
          this.router.navigate(['role-selection']);
          return false;
        }
      }
    } else {
      if (routePath.startsWith('public')) {
        return true;
      } else {
        // redirect to landing page
        this.router.navigate(['public', 'landing-page']);
        return false;
      }
    }
  }
}
