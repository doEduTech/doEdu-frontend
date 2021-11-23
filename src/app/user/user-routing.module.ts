import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAchievementsComponent } from './user-achievements/user-achievements.component';
import { UserEarningsComponent } from './user-earnings/user-earnings.component';

const routes: Routes = [
  {
    path: ':userId/achievements',
    component: UserAchievementsComponent,
  },
  {
    path: ':userId/earnings',
    component: UserEarningsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
