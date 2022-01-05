import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { BlockchainAccountInitializationComponent } from './blockchain-account-initialization/blockchain-account-initialization.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    UserRoutingModule,
  ],
  declarations: [BlockchainAccountInitializationComponent],
})
export class UserModule {}
