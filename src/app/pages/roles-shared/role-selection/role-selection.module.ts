import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@app/material.module';
import { RoleSelectionRoutingModule } from './role-selection-routing.module';
import { RoleSelectionComponent } from './role-selection.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RoleSelectionRoutingModule,
  ],
  declarations: [RoleSelectionComponent],
})
export class RoleSelectionModule {}
