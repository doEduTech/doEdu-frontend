import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockchainAccountComponent } from './blockchain-account/blockchain-account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blockchain',
  },
  {
    path: 'blockchain',
    component: BlockchainAccountComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
