import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { PersonalLockedPrizeDialogComponent } from '@shared/personal-locked-prize-dialog/personal-locked-prize-modal.component';
import { ILockedPrizeDialogConfig } from '@interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalLockedPrizeService {
  constructor(public dialog: MatDialog) {}

  openDialog(
    config: ILockedPrizeDialogConfig
  ): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(PersonalLockedPrizeDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
