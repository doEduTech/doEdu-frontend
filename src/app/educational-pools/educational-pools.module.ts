import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material.module';
import { EducationalPoolsRoutingModule } from './educational-pools-routing.module';
import { EducationalPoolsComponent } from './educational-pools.component';
import { EducationalPoolComponent } from './educational-pool/educational-pool.component';
import { EducationalPoolFundsDialogComponent } from './educational-pool-funds-dialog/educational-pool-funds-dialog.component';
import { EducationalPoolMaterialsComponent } from './educational-pool/educational-pool-materials/educational-pool-materials.component';

@NgModule({
  declarations: [
    EducationalPoolsComponent,
    EducationalPoolComponent,
    EducationalPoolFundsDialogComponent,
    EducationalPoolMaterialsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    EducationalPoolsRoutingModule,
  ],
})
export class EducationalPoolsModule {}
