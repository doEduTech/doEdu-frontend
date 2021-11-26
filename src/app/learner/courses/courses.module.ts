import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { MaterialModule } from '../../material.module';
import { CoursesFiltersComponent } from './courses-filters/courses-filters.component';
import { CoursesRoutingModule } from './courses-routing.module';
import { CourseComponent } from './course/course.component';
import { CourseCommentsComponent } from './course/course-comments/course-comments.component';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
    CoursesFiltersComponent,
    CourseCommentsComponent,
  ],
  imports: [CommonModule, MaterialModule, CoursesRoutingModule],
})
export class CoursesModule {}
