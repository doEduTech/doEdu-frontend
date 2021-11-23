import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassesComponent } from './classes.component';

const routes: Routes = [
  {
    path: '',
    component: ClassesComponent,
  },
  // {
  //   path: ':courseId',
  //   component: CourseComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassesRoutingModule {}
