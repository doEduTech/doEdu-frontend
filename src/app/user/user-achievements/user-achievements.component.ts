import { Component, OnInit } from '@angular/core';

import { SnackBarService } from '@services/shared/snack-bar.service';
import { IUserAchievement } from '@app/_interfaces/user-achievement.interface';
import { UserAchievementsService } from '@services/api/user-achievements.service';

@Component({
  selector: 'app-user-achievements',
  templateUrl: './user-achievements.component.html',
  styleUrls: ['./user-achievements.component.scss'],
})
export class UserAchievementsComponent implements OnInit {
  public achievements: IUserAchievement[] = [];

  constructor(
    private achievementsService: UserAchievementsService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getUserAchievements();
  }

  public getUserAchievements(): void {
    this.achievementsService
      .getAll()
      .subscribe((val) => (this.achievements = val));
  }

  public copyNFTId(): void {
    this.snackBarService.openSnackBar('NFT ID copied', 'success');
  }
}
