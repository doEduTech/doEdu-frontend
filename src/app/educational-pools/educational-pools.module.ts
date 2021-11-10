import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../material.module';
import { EducationalPoolsRoutingModule } from './educational-pools-routing.module';
import { EducationalPoolsComponent } from './educational-pools.component';

@NgModule({
  declarations: [EducationalPoolsComponent],
  imports: [CommonModule, MaterialModule, EducationalPoolsRoutingModule],
})
export class EducationalPoolsModule {}
