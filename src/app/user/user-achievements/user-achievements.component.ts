import { Component, OnInit } from '@angular/core';

import { SnackBarService } from '@services/shared/snack-bar.service';
import { IAchievement } from '@interfaces/achievement.interface';
import { AchievementsService } from '@services/api/achievements.service';

@Component({
  selector: 'app-user-achievements',
  templateUrl: './user-achievements.component.html',
  styleUrls: ['./user-achievements.component.scss'],
})
export class UserAchievementsComponent implements OnInit {
  public achievements: IAchievement[] = [];

  constructor(
    private achievementsService: AchievementsService,
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
