import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'educational-pools',
    loadChildren: () =>
      import('./educational-pools/educational-pools.module').then(
        (m) => m.EducationalPoolsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
