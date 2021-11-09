import { EventEmitter } from '@angular/core';
import { Component, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ILockedPrizeDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Component({
  selector: 'app-group-locked-prize-dialog',
  templateUrl: './group-locked-prize-dialog.component.html',
  styleUrls: ['./group-locked-prize-dialog.component.scss'],
})
export class GroupLockedPrizeDialogComponent {
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
  @Output() confirmAction: EventEmitter<boolean> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<GroupLockedPrizeDialogComponent>,
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
