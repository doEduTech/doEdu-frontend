import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ITippingDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-tipping-dialog',
  templateUrl: './tipping-dialog.component.html',
  styleUrls: ['./tipping-dialog.component.scss'],
})
export class TippingDialogComponent {
  @Output() confirmAction: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<TippingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITippingDialogConfig
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
