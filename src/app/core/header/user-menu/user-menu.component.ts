import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  public user = {
    name: 'John Doe',
    id: 1,
  };
  public isUserAuthenticated = true;

  constructor(
    private router: Router,
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {}

  loginWithRedirect() {
      this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }
}