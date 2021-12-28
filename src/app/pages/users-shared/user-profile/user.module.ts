import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../../material.module';
import { UserAchievementsComponent } from './user-achievements/user-achievements.component';
import { UserRoutingModule } from './user-routing.module';
import { UserEarningsComponent } from './user-earnings/user-earnings.component';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [UserAchievementsComponent, UserEarningsComponent],
  imports: [CommonModule, MaterialModule, UserRoutingModule, PipesModule],
})
export class UserModule {}
