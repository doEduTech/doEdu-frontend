import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketLessonsComponent } from './market-lessons.component';
import { MaterialModule } from '../../../material.module';
import { MarketLessonsRoutingModule } from './market-lessons-routing.module';
import { MarketLessonComponent } from './market-lesson/market-lesson.component';
import { MarketLessonsFiltersComponent } from './market-lessons-filters/market-lessons-filters.component';
import { PipesModule } from '@pipes/pipes.module';

@NgModule({
  declarations: [
    MarketLessonsComponent,
    MarketLessonComponent,
    MarketLessonsFiltersComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MarketLessonsRoutingModule,
    PipesModule,
  ],
})
export class MarketLessonsModule {}
