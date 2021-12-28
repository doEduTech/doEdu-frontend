import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { TokenBalanceService } from '@services/token-balance.service';
import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { IEducationalPoolFundsDialogConfig } from '@app/_interfaces/learner/educational-pool.interface';

@Component({
  selector: 'app-educational-pool-funds-dialog',
  templateUrl: './educational-pool-funds-dialog.component.html',
  styleUrls: ['./educational-pool-funds-dialog.component.scss'],
})
export class EducationalPoolFundsDialogComponent {
  @Output()
  confirmAction: EventEmitter<IBalanceSubtractEvent> = new EventEmitter();

  public form = new FormGroup({
    amount: new FormControl('', Validators.required),
  });

  constructor(
    public tokenBalanceService: TokenBalanceService,
    public dialogRef: MatDialogRef<EducationalPoolFundsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEducationalPoolFundsDialogConfig
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
