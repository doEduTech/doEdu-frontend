import { Component } from '@angular/core';

import { SnackBarService } from '@services/shared/snack-bar.service';
import { BlockchainService } from '@services/api/blockchain.service';

@Component({
  selector: 'app-blockchain-faucet',
  templateUrl: './blockchain-faucet.component.html',
  styleUrls: ['./blockchain-faucet.component.scss'],
})
export class BlockchainFaucetComponent {
  constructor(
    private blockchanService: BlockchainService,
    private snackBarService: SnackBarService
  ) {}

  public purchaseTokens(): void {
    this.blockchanService.purchaseFaucetTokens().subscribe(() => {
      this.snackBarService.openSnackBar(
        'Faucet tokens successfully requested. Please, wait for the balance update.',
        'success'
      );
    });
  }
}
