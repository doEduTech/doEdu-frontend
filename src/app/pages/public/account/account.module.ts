import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRoutingModule } from './account-routing.module';
import { MaterialModule } from '@app/material.module';

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
