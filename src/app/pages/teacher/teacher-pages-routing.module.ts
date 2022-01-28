import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./teacher-dashboard/teacher-dashboard.module').then(
        (m) => m.TeacherDashboardModule
      ),
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./teacher-lessons/teacher-lessons.module').then(
        (m) => m.TeacherLessonsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherPagesRoutingModule {}
