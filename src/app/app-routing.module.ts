import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleSelectionComponent } from './pages/users-shared/role-selection/role-selection.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: 'public',
    loadChildren: () =>
      import('./pages/public/public-pages.module').then(
        (m) => m.PublicPagesModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'role-selection',
    loadChildren: () =>
      import('./pages/users-shared/role-selection/role-selection.module').then(
        (m) => m.RoleSelectionModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'learner',
    loadChildren: () =>
      import('./pages/learner/learner-pages.module').then(
        (m) => m.LearnerPagesModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./pages/teacher/teacher-pages.module').then(
        (m) => m.TeacherPagesModule
      ),
    canLoad: [AuthGuard],
  },
  {
    path: 'market',
    loadChildren: () =>
      import('./pages/users-shared/market/market.module').then(
        (m) => m.MarketModule
      ),
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
