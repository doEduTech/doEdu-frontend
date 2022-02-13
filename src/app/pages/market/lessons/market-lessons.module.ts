import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketLessonsComponent } from './market-lessons.component';
import { MaterialModule } from '@app/material.module';
import { MarketLessonsRoutingModule } from './market-lessons-routing.module';
import { MarketLessonComponent } from './market-lesson/market-lesson.component';
import { MarketLessonsFiltersComponent } from './market-lessons-filters/market-lessons-filters.component';
import { PipesModule } from '@pipes/pipes.module';
import { MarketVideoLessonComponent } from './market-lesson/market-video-lesson/market-video-lesson.component';
import { MarketAudioLessonComponent } from './market-lesson/market-audio-lesson/market-audio-lesson.component';
import { MarketPdfLessonComponent } from './market-lesson/market-pdf-lesson/market-pdf-lesson.component';

@NgModule({
  declarations: [
    MarketLessonsComponent,
    MarketLessonComponent,
    MarketLessonsFiltersComponent,
    MarketVideoLessonComponent,
    MarketAudioLessonComponent,
    MarketPdfLessonComponent,
    MarketVideoLessonComponent,
    MarketAudioLessonComponent,
    MarketPdfLessonComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MarketLessonsRoutingModule,
    PipesModule,
    ReactiveFormsModule,
  ],
})
export class MarketLessonsModule {}
