import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  {
    path: '',
    component: CoursesComponent,
  },
  {
    path: ':courseId',
    component: CourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
