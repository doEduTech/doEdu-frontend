import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import {
  IBalanceSubtractEvent,
  IPurchaseDialogConfig,
} from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-purchase-for-self-dialog',
  templateUrl: './purchase-for-self-dialog.component.html',
  styleUrls: ['./purchase-for-self-dialog.component.scss'],
})
export class PurchaseForSelfDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<PurchaseForSelfDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPurchaseDialogConfig
  ) {}

  confirm(): void {
    this.confirmAction.emit({
      confirmed: true,
      amount: <number>this.data.price,
    });
    this.dialogRef.close();
  }

  discard(): void {
    this.confirmAction.emit({
      confirmed: false,
      amount: null,
    });
    this.dialogRef.close();
  }
}
