import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';

import { EducationalPoolFundsDialogComponent } from '@app/educational-pools/educational-pool-funds-dialog/educational-pool-funds-dialog.component';
import { IEducationalPoolFundsDialogConfig } from '@interfaces/educational-pool.interface';

@Injectable({
  providedIn: 'root',
})
export class EducationalPoolFundsService {
  constructor(public dialog: MatDialog) {}

  openDialog(config: IEducationalPoolFundsDialogConfig): Observable<boolean> {
    const dialogRef = this.dialog.open(EducationalPoolFundsDialogComponent, {
      data: {
        ...config,
      },
    });
    return dialogRef.componentInstance.confirmAction;
  }
}
