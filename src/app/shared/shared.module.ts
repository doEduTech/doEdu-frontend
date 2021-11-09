import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material.module';
import { TippingDialogComponent } from './tipping-dialog/tipping-dialog.component';
import { GroupLockedPrizeDialogComponent } from './group-locked-prize-dialog/group-locked-prize-dialog.component';
import { PersonalLockedPrizeDialogComponent } from './personal-locked-prize-dialog/personal-locked-prize-modal.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PurchaseDialogComponent } from './purchase-dialog/purchase-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    TippingDialogComponent,
    GroupLockedPrizeDialogComponent,
    PersonalLockedPrizeDialogComponent,
    ConfirmationDialogComponent,
    PurchaseDialogComponent,
    SnackBarComponent,
  ],
  exports: [
    TippingDialogComponent,
    GroupLockedPrizeDialogComponent,
    PersonalLockedPrizeDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
