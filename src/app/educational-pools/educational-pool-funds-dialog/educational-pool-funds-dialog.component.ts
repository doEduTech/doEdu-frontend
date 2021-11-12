import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { IEducationalPoolFundsDialogConfig } from '@interfaces/educational-pool.interface';

@Component({
  selector: 'app-educational-pool-funds-dialog',
  templateUrl: './educational-pool-funds-dialog.component.html',
  styleUrls: ['./educational-pool-funds-dialog.component.scss'],
})
export class EducationalPoolFundsDialogComponent {
  @Output() confirmAction: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<EducationalPoolFundsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IEducationalPoolFundsDialogConfig
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
