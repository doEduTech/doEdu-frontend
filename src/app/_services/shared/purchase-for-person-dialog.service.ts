import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { IPurchaseDialogConfig } from '@interfaces/shared-dialogs.interface';
import { PurchaseForPersonDialogComponent } from '@shared/purchase-for-person-dialog/purchase-for-person-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PurchaseForPersonDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IPurchaseDialogConfig): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(PurchaseForPersonDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
