import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '@services/auth.service';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { BlockchainService } from '@services/api/blockchain.service';
import { IBlockchainAccount } from '@interfaces/blockchain-account.interface';

@Component({
  selector: 'app-blockchain-account',
  templateUrl: './blockchain-account.component.html',
  styleUrls: ['./blockchain-account.component.scss'],
})
export class BlockchainAccountComponent {
  public showCredentials = false;
  public account: IBlockchainAccount | undefined;
  public form = new FormGroup({
    word0: new FormControl('', Validators.required),
    word1: new FormControl('', Validators.required),
    word2: new FormControl('', Validators.required),
    word3: new FormControl('', Validators.required),
    word4: new FormControl('', Validators.required),
    word5: new FormControl('', Validators.required),
    word6: new FormControl('', Validators.required),
    word7: new FormControl('', Validators.required),
    word8: new FormControl('', Validators.required),
    word9: new FormControl('', Validators.required),
    word10: new FormControl('', Validators.required),
    word11: new FormControl('', Validators.required),
  });

  constructor(
    public authService: AuthService,
    private blockchainService: BlockchainService,
    private snackBarService: SnackBarService
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
      this.snackBarService.openSnackBar(
        'Your blockchain account was successfully initialized',
        'success'
      );
    });
  }

  public clearForm(): void {
    this.form.reset();
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
