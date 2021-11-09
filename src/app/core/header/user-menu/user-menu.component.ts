import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  public username = 'Username';
  public isUserAuthenticated = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {}
}
