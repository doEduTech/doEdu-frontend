import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafePipe } from './safe.pipe';
import { IPFSPipe } from './ipfs.pipe';

@NgModule({
  declarations: [SafePipe, IPFSPipe],
  imports: [CommonModule],
  exports: [SafePipe, IPFSPipe],
})
export class PipesModule {}
