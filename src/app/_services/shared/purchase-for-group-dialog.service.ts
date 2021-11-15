import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { IPurchaseDialogConfig } from '@interfaces/shared-dialogs.interface';
import { PurchaseForGroupDialogComponent } from '@shared/purchase-for-group-dialog/purchase-for-group-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PurchaseForGroupDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IPurchaseDialogConfig): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(PurchaseForGroupDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
