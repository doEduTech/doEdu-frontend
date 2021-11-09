import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IPurchaseDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-purchase-dialog',
  templateUrl: './purchase-dialog.component.html',
  styleUrls: ['./purchase-dialog.component.scss'],
})
export class PurchaseDialogComponent {
  @Output() confirmAction: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<PurchaseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IPurchaseDialogConfig
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
