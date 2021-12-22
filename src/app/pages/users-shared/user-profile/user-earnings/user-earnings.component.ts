import { Component, OnInit } from '@angular/core';

import { IUserEarning } from '@interfaces/user-earning.interface';
import { UserEarningsService } from '@app/_services/api/learner/user-earnings.service';

@Component({
  selector: 'app-user-earnings',
  templateUrl: './user-earnings.component.html',
  styleUrls: ['./user-earnings.component.scss'],
})
export class UserEarningsComponent implements OnInit {
  public earnings: IUserEarning[] | undefined;

  constructor(private userEarningsService: UserEarningsService) {}

  ngOnInit(): void {
    this.getUserEarnings();
  }

  public getUserEarnings(): void {
    this.userEarningsService.getAll().subscribe((val) => (this.earnings = val));
  }
}
