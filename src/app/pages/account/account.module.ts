import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@app/material.module';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AccountRoutingModule,
  ],
  exports: [],
  declarations: [LoginComponent, RegisterComponent],
  providers: [],
})
export class AccountModule {}
