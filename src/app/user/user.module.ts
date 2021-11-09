import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material.module';
import { UserAchievementsComponent } from './user-achievements/user-achievements.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserAchievementsComponent],
  imports: [CommonModule, MaterialModule, UserRoutingModule],
})
export class UserModule {}
