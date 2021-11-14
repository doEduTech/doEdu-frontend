import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import {
  ILockedPrizeDialogConfig,
  IBalanceSubtractEvent,
} from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-personal-locked-prize-dialog',
  templateUrl: './personal-locked-prize-dialog.component.html',
  styleUrls: ['./personal-locked-prize-dialog.component.scss'],
})
export class PersonalLockedPrizeDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  public form = new FormGroup({
    amount: new FormControl('', Validators.required),
  });
  public groups = [
    {
      name: 'Shirley Sheridan',
    },
    {
      name: 'Hashim Orozco',
    },
    {
      name: 'Marwa Goddard',
    },
  ];

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<PersonalLockedPrizeDialogComponent>,
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
