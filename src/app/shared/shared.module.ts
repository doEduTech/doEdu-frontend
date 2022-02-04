import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material.module';
import { TippingDialogComponent } from './tipping-dialog/tipping-dialog.component';
import { GroupLockedPrizeDialogComponent } from './group-locked-prize-dialog/group-locked-prize-dialog.component';
import { PersonalLockedPrizeDialogComponent } from './personal-locked-prize-dialog/personal-locked-prize-modal.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { PurchaseForSelfDialogComponent } from './purchase-for-self-dialog/purchase-for-self-dialog.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { PurchaseForPersonDialogComponent } from './purchase-for-person-dialog/purchase-for-person-dialog.component';
import { PurchaseForGroupDialogComponent } from './purchase-for-group-dialog/purchase-for-group-dialog.component';
import { PassphraseAuthorizationDialogComponent } from './passphrase-authorization-dialog/passphrase-authorization-dialog.component';

@NgModule({
  declarations: [
    TippingDialogComponent,
    GroupLockedPrizeDialogComponent,
    PersonalLockedPrizeDialogComponent,
    ConfirmationDialogComponent,
    PurchaseForSelfDialogComponent,
    SnackBarComponent,
    PurchaseForPersonDialogComponent,
    PurchaseForGroupDialogComponent,
    PassphraseAuthorizationDialogComponent,
  ],
  exports: [
    TippingDialogComponent,
    GroupLockedPrizeDialogComponent,
    PersonalLockedPrizeDialogComponent,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class SharedModule {}
