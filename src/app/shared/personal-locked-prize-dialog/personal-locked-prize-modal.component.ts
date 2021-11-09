import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ILockedPrizeDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-personal-locked-prize-dialog',
  templateUrl: './personal-locked-prize-dialog.component.html',
  styleUrls: ['./personal-locked-prize-dialog.component.scss'],
})
export class PersonalLockedPrizeDialogComponent {
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
  @Output() confirmAction: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<PersonalLockedPrizeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ILockedPrizeDialogConfig
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
