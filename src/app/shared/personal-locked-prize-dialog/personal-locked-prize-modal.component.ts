import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef, MAT_LEGACY_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/legacy-dialog';

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

  public form = new UntypedFormGroup({
    amount: new UntypedFormControl('', Validators.required),
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
