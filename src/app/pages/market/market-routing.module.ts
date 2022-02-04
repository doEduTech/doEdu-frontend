import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lessons',
    pathMatch: 'full',
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./lessons/market-lessons.module').then(
        (m) => m.MarketLessonsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}
