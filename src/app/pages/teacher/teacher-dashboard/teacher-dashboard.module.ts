import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { TeacherDashboardComponent } from './teacher-dashboard.component';
import { TeacherDashboardRoutingModule } from './teacher-dashboard-routing.module';
import { TransactionsHistoryModule } from '@app/shared/transactions-history/transactions-history.module';

@NgModule({
  declarations: [TeacherDashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TransactionsHistoryModule,
    TeacherDashboardRoutingModule,
  ],
})
export class TeacherDashboardModule {}
