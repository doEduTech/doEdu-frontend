import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { IBalanceSubtractEvent } from '@interfaces/shared-dialogs.interface';
import { PurchaseForSelfDialogComponent } from '@shared/purchase-for-self-dialog/purchase-for-self-dialog.component';
import { IPurchaseDialogConfig } from '@interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class PurchaseForSelfDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IPurchaseDialogConfig): Observable<IBalanceSubtractEvent> {
    const dialogRef = this.dialog.open(PurchaseForSelfDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
