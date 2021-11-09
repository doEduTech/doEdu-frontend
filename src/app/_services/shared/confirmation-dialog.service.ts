import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { ConfirmationDialogComponent } from 'src/app/shared/confirmation-dialog/confirmation-dialog.component';
import { IConfirmationDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class ConfirmationDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IConfirmationDialogConfig): Observable<boolean> {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
