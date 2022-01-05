import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'market',
    pathMatch: 'full',
  },
  // MARKET: public, available for unauthenticated and authenticated users
  {
    path: 'market',
    loadChildren: () =>
      import('./pages/market/market.module').then((m) => m.MarketModule),
    canLoad: [AuthGuard],
  },
  // ROLE SELECTION: first logging in
  {
    path: 'role-selection',
    loadChildren: () =>
      import('./pages/roles-shared/role-selection/role-selection.module').then(
        (m) => m.RoleSelectionModule
      ),
    canLoad: [AuthGuard],
  },
  // LEARNER-role-only routes and modules
  {
    path: 'learner',
    loadChildren: () =>
      import('./pages/learner/learner-pages.module').then(
        (m) => m.LearnerPagesModule
      ),
    canLoad: [AuthGuard],
  },
  // TEACHER-role-only routes and modules
  {
    path: 'teacher',
    loadChildren: () =>
      import('./pages/teacher/teacher-pages.module').then(
        (m) => m.TeacherPagesModule
      ),
    canLoad: [AuthGuard],
  },
  // ACCOUNT creation and authentication
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account/account.module').then((m) => m.AccountModule),
    canLoad: [AuthGuard],
  },
  // USER related mechanisms, like profile, blockchain config, etc.
  {
    path: 'user',
    loadChildren: () =>
      import('./pages/roles-shared/user/user.module').then((m) => m.UserModule),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
