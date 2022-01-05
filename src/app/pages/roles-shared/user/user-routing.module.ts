import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlockchainAccountInitializationComponent } from './blockchain-account-initialization/blockchain-account-initialization.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'blockchain',
  },
  {
    path: 'blockchain',
    component: BlockchainAccountInitializationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
