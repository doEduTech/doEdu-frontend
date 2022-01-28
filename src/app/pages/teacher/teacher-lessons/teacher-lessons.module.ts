import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherLessonsComponent } from './teacher-lessons/teacher-lessons.component';
import { MaterialModule } from '@app/material.module';
import { TeacherLessonsRoutingModule } from './teacher-lessons-routing.module';
import { TeacherLessonFormComponent } from './teacher-lessons/teacher-lesson-form/teacher-lesson-form.component';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [TeacherLessonsComponent, TeacherLessonFormComponent],
  imports: [
    CommonModule,
    TeacherLessonsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    PipesModule,
  ],
})
export class TeacherLessonsModule {}
