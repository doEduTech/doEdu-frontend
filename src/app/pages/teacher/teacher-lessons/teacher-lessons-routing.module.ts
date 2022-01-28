import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherLessonFormComponent } from './teacher-lessons/teacher-lesson-form/teacher-lesson-form.component';
import { TeacherLessonsComponent } from './teacher-lessons/teacher-lessons.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherLessonsComponent,
  },
  {
    path: 'new',
    component: TeacherLessonFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherLessonsRoutingModule {}
