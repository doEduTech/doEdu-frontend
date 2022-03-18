import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnerDashboardComponent } from './learner-dashboard.component';
import { MaterialModule } from '@app/material.module';
import { LearnerDashboardRoutingModule } from './learner-dashboard-routing.module';
import { LeadnerLikedLessonsComponent } from './learner-liked-lessons/learner-liked-lessons.component';
import { LearnerTippedLessonsComponent } from './learner-tipped-lessons/learner-tipped-lessons.component';
import { PipesModule } from '@pipes/pipes.module';
import { TransactionsHistoryModule } from '@app/shared/transactions-history/transactions-history.module';

@NgModule({
  declarations: [
    LearnerDashboardComponent,
    LeadnerLikedLessonsComponent,
    LearnerTippedLessonsComponent,
  ],

  imports: [
    PipesModule,
    CommonModule,
    MaterialModule,
    LearnerDashboardRoutingModule,
    TransactionsHistoryModule,
  ],
})
export class LearnerDashboardModule {}
