import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IConfirmationDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

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

  confirm(): void {
    this.confirmAction.emit(true);
    this.dialogRef.close();
  }

  discard(): void {
    this.confirmAction.emit(false);
    this.dialogRef.close();
  }
}
