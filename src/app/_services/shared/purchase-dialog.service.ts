import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { PurchaseDialogComponent } from 'src/app/shared/purchase-dialog/purchase-dialog.component';
import { IPurchaseDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class PurchaseDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IPurchaseDialogConfig): Observable<boolean> {
    const dialogRef = this.dialog.open(PurchaseDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
