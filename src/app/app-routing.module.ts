import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./learner/courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'educational-pools',
    loadChildren: () =>
      import('./learner/educational-pools/educational-pools.module').then(
        (m) => m.EducationalPoolsModule
      ),
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./teacher/classes/teacher-classes.module').then(
        (m) => m.TeacherClassesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
