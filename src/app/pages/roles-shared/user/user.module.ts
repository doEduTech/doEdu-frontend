import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { BlockchainAccountComponent } from './blockchain-account/blockchain-account.component';
import { UserRoutingModule } from './user-routing.module';
import { BlockchainFaucetComponent } from './blockchain-account/blockchain-faucet/blockchain-faucet.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  declarations: [BlockchainAccountComponent, BlockchainFaucetComponent],
})
export class UserModule {}
