import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { GroupLockedPrizeDialogComponent } from '@shared/group-locked-prize-dialog/group-locked-prize-dialog.component';
import { ILockedPrizeDialogConfig } from '@interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupLockedPrizeService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    config: ILockedPrizeDialogConfig
  ): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(GroupLockedPrizeDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
