import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserAchievementsComponent } from './user-achievements/user-achievements.component';

const routes: Routes = [
  {
    path: ':userId/achievements',
    component: UserAchievementsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
