import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EducationalPoolsComponent } from './educational-pools.component';
import { EducationalPoolComponent } from './educational-pool/educational-pool.component';

const routes: Routes = [
  {
    path: '',
    component: EducationalPoolsComponent,
  },
  {
    path: ':poolId',
    component: EducationalPoolComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EducationalPoolsRoutingModule {}
