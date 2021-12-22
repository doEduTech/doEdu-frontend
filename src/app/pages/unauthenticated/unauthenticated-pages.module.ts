import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnauthenticatedPagesRoutingModule } from './unauthenticated-pages-routing.module';

@NgModule({
  imports: [CommonModule, UnauthenticatedPagesRoutingModule],
})
export class UnauthenticatedPagesModule {}
