import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { PurchaseDialogComponent } from '@shared/purchase-dialog/purchase-dialog.component';
import { IPurchaseDialogConfig } from '@interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class PurchaseDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IPurchaseDialogConfig): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(PurchaseDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
