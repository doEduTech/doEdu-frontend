import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { GroupLockedPrizeDialogComponent } from 'src/app/shared/group-locked-prize-dialog/group-locked-prize-dialog.component';
import { ILockedPrizeDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupLockedPrizeService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: ILockedPrizeDialogConfig): Observable<boolean> {
    const dialogRef = this.dialog.open(GroupLockedPrizeDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
