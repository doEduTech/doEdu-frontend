import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { BlockchainService } from '@services/api/blockchain.service';
import { IBlockchainAccountForm } from '@interfaces/blockchain-account.interface';
import { BlockchainTransactionsGatewayService } from '@services/blockchain-transactions.service';

@Component({
  selector: 'app-blockchain-account',
  templateUrl: './blockchain-account.component.html',
  styleUrls: ['./blockchain-account.component.scss'],
})
export class BlockchainAccountComponent {
  public showCredentials = false;
  public account: IBlockchainAccountForm | undefined;
  public form = new UntypedFormGroup({
    word0: new UntypedFormControl('', Validators.required),
    word1: new UntypedFormControl('', Validators.required),
    word2: new UntypedFormControl('', Validators.required),
    word3: new UntypedFormControl('', Validators.required),
    word4: new UntypedFormControl('', Validators.required),
    word5: new UntypedFormControl('', Validators.required),
    word6: new UntypedFormControl('', Validators.required),
    word7: new UntypedFormControl('', Validators.required),
    word8: new UntypedFormControl('', Validators.required),
    word9: new UntypedFormControl('', Validators.required),
    word10: new UntypedFormControl('', Validators.required),
    word11: new UntypedFormControl('', Validators.required),
  });

  public get formPassphrase(): string {
    return Object.values(this.form.value).join(' ');
  }

  constructor(
    public authService: AuthService,
    private blockchainService: BlockchainService,
    private snackBarService: SnackBarService,
    private blockchainTransactionsGatewayService: BlockchainTransactionsGatewayService
  ) {}

  public generatePassphrases(): void {
    this.blockchainService
      .getGeneratedPassphrases()
      .subscribe((passphrases) => {
        this.setPassphrases(passphrases);
      });
  }

  public initializeBlockchainAccount(): void {
    const passphrase = this.getUserPassphrase();
    this.blockchainService.initializeAccount(passphrase).subscribe((val) => {
      this.authService.setSession({ access_token: val.access_token });
      this.showCredentials = true;
      this.account = val;
      this.form.disable();
      this.blockchainTransactionsGatewayService.connect();
      this.snackBarService.openSnackBar(
        'Your blockchain account was successfully initialized',
        'success'
      );
    });
  }

  public clearForm(): void {
    this.form.reset();
  }

  public displayCopyingConfirmation(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.snackBarService.openSnackBar(
      'Passphrase copied to the clipboard',
      'success'
    );
  }

  private setPassphrases(mnemonic: string): void {
    mnemonic.split(' ').forEach((val, idx) => {
      this.form.controls[`word${idx}`].setValue(val);
    });
  }

  private getUserPassphrase(): string {
    return Object.values(this.form.controls)
      .map((formControl) => formControl.value)
      .join(' ');
  }
}
