import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { PersonalLockedPrizeDialogComponent } from 'src/app/shared/personal-locked-prize-dialog/personal-locked-prize-modal.component';
import { ILockedPrizeDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonalLockedPrizeService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: ILockedPrizeDialogConfig): Observable<boolean> {
    const dialogRef = this.dialog.open(PersonalLockedPrizeDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
