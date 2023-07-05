import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import {
  IBalanceSubtractEvent,
  IPurchaseDialogConfig,
} from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-purchase-for-group-dialog',
  templateUrl: './purchase-for-group-dialog.component.html',
  styleUrls: ['./purchase-for-group-dialog.component.scss'],
})
export class PurchaseForGroupDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  public groups = [
    {
      name: 'Michigan High Music School (10 persons)',
    },
    {
      name: 'Stars hunters club (10 persons)',
    },
    {
      name: 'Berlin botany research club (10 persons)',
    },
  ];

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<PurchaseForGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPurchaseDialogConfig
  ) {}

  confirm(): void {
    this.confirmAction.emit({
      confirmed: true,
      amount: <number>this.data.price * 10,
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
