import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleSelectionComponent } from './role-selection.component';

const routes: Routes = [
  {
    path: '',
    component: RoleSelectionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoleSelectionRoutingModule {}
