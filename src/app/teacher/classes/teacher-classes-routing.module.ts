import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherClassesComponent } from './teacher-classes.component';
import { TeacherClassComponent } from './teacher-class/teacher-class.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherClassesComponent,
  },
  {
    path: ':teacherClassId',
    component: TeacherClassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherClassesRoutingModule {}
