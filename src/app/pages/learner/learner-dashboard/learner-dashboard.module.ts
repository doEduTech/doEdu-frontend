import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnerDashboardComponent } from './learner-dashboard.component';
import { MaterialModule } from '@app/material.module';

@NgModule({
  declarations: [LearnerDashboardComponent],
  imports: [CommonModule, MaterialModule],
})
export class LearnerDashboardModule {}
