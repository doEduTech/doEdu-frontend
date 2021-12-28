import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';

@NgModule({
  declarations: [TeacherDashboardComponent],
  imports: [CommonModule, MaterialModule, TeacherDashboardRoutingModule],
})
export class TeacherDashboardModule {}
