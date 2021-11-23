import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@app/material.module';
import { ClassesComponent } from './classes.component';
import { ClassesRoutingModule } from './classes-routing.module';

@NgModule({
  declarations: [ClassesComponent],
  imports: [CommonModule, MaterialModule, ClassesRoutingModule],
})
export class ClassesModule {}
