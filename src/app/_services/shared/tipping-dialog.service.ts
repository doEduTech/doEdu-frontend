import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { TippingDialogComponent } from 'src/app/shared/tipping-dialog/tipping-dialog.component';
import { ITippingDialogConfig } from 'src/app/_interfaces/shared-dialogs.interface';

@Injectable({
  providedIn: 'root',
})
export class TippingModalService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: ITippingDialogConfig): Observable<boolean> {
    const dialogRef = this.dialog.open(TippingDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
