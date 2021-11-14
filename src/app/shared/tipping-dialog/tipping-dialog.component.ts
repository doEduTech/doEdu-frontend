import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import {
  IBalanceSubtractEvent,
  ITippingDialogConfig,
} from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-tipping-dialog',
  templateUrl: './tipping-dialog.component.html',
  styleUrls: ['./tipping-dialog.component.scss'],
})
export class TippingDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  public form = new FormGroup({
    amount: new FormControl('', Validators.required),
  });

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<TippingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITippingDialogConfig
  ) {}

  confirm(): void {
    this.confirmAction.emit({
      confirmed: true,
      amount: this.form.value.amount,
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
