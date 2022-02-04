import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarketLessonComponent } from './market-lesson/market-lesson.component';
import { MarketLessonsComponent } from './market-lessons.component';

const routes: Routes = [
  {
    path: '',
    component: MarketLessonsComponent,
  },
  {
    path: ':marketLessonId',
    component: MarketLessonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketLessonsRoutingModule {}
