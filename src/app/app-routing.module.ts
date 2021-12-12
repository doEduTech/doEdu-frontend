import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () =>
      import('./learner/courses/courses.module').then((m) => m.CoursesModule),
      canActivate: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'educational-pools',
    loadChildren: () =>
      import('./learner/educational-pools/educational-pools.module').then(
        (m) => m.EducationalPoolsModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'classes',
    loadChildren: () =>
      import('./teacher/classes/teacher-classes.module').then(
        (m) => m.TeacherClassesModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component:HomeComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
