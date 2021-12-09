import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { TeacherClassesRoutingModule } from './teacher-classes-routing.module';
import { TeacherClassComponent } from './teacher-class/teacher-class.component';
import { TeacherClassesComponent } from './teacher-classes.component';

@NgModule({
  declarations: [TeacherClassesComponent, TeacherClassComponent],
  imports: [CommonModule, MaterialModule, TeacherClassesRoutingModule],
})
export class TeacherClassesModule {}
