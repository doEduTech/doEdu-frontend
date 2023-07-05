import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import {
  ILockedPrizeDialogConfig,
  IBalanceSubtractEvent,
} from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-group-locked-prize-dialog',
  templateUrl: './group-locked-prize-dialog.component.html',
  styleUrls: ['./group-locked-prize-dialog.component.scss'],
})
export class GroupLockedPrizeDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  public form = new UntypedFormGroup({
    amount: new UntypedFormControl('', Validators.required),
  });
  public groups = [
    {
      name: 'Michigan High Music School',
    },
    {
      name: 'Stars hunters club',
    },
    {
      name: 'Berlin botany research club',
    },
  ];

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<GroupLockedPrizeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILockedPrizeDialogConfig
  ) {}

  public confirm(): void {
    this.confirmAction.emit({
      confirmed: true,
      amount: this.form.value.amount,
    });
    this.dialogRef.close();
  }

  public discard(): void {
    this.confirmAction.emit({
      confirmed: false,
      amount: null,
    });
    this.dialogRef.close();
  }
}
