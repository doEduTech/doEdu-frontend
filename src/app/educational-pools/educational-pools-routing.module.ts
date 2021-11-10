import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EducationalPoolsComponent } from './educational-pools.component';

const routes: Routes = [
  {
    path: '',
    component: EducationalPoolsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationalPoolsRoutingModule {}
