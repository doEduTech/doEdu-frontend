import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import {
  IBalanceSubtractEvent,
  IPurchaseDialogConfig,
} from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.scss'],
})
export class PurchaseDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<PurchaseDialogComponent>,
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
