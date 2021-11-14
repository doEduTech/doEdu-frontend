import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { TokenBalanceService } from '@services/token-balance.service';
import { IConfirmationDialogConfig } from '@interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: 'confirmation-dialog.component.html',
  styleUrls: ['confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  @Output() confirmAction: EventEmitter<boolean> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IConfirmationDialogConfig
  ) {}

  public confirm(): void {
    this.confirmAction.emit(true);
    this.dialogRef.close();
  }

  public discard(): void {
    this.confirmAction.emit(false);
    this.dialogRef.close();
  }
}
