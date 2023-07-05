import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatLegacyDialogRef as MatDialogRef } from '@angular/material/legacy-dialog';

@Component({
  selector: 'app-passphrase-authorization-dialog',
  templateUrl: './passphrase-authorization-dialog.component.html',
  styleUrls: ['./passphrase-authorization-dialog.component.scss'],
})
export class PassphraseAuthorizationDialogComponent implements OnInit {
  @Output()
  public confirmAction: EventEmitter<string> = new EventEmitter();
  public passphraseFormControl = new UntypedFormControl();

  constructor(
    public dialogRef: MatDialogRef<PassphraseAuthorizationDialogComponent>
  ) {}

  ngOnInit(): void {}

  public confirm(): void {
    this.confirmAction.emit(this.passphraseFormControl.value);
    this.dialogRef.close();
  }

  public discard(): void {
    this.dialogRef.close();
  }
}
