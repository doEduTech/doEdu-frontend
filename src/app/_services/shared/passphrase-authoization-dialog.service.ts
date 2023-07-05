import { Injectable } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { Observable } from 'rxjs';

import { PassphraseAuthorizationDialogComponent } from '@shared/passphrase-authorization-dialog/passphrase-authorization-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class PassphraseAuthorizationDialogService {
  constructor(public dialog: MatDialog) {}

  openDialog(): Observable<string> {
    const dialogRef = this.dialog.open(PassphraseAuthorizationDialogComponent);
    return dialogRef.componentInstance.confirmAction;
  }
}
