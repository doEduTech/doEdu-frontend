import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { TippingDialogComponent } from '@shared/tipping-dialog/tipping-dialog.component';
import { ITippingDialogConfig } from '@interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class TippingModalService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: ITippingDialogConfig): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(TippingDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
