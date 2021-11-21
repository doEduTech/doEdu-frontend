import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EarningPipe } from './earning.pipe';

@NgModule({
  declarations: [EarningPipe],
  imports: [CommonModule],
  exports: [EarningPipe],
})
export class PipesModule {}
