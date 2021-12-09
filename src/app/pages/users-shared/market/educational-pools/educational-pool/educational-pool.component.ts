import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';

import { ConfirmationDialogService } from '@services/shared/confirmation-dialog.service';
import { EducationalPoolsService } from '@app/_services/api/learner/educational-pools.service';
import {
  IEducationalPool,
  IEducationalPoolMaterial,
} from '@app/_interfaces/learner/educational-pool.interface';
import { EducationalPoolFundsService } from '@app/_services/educational-pool-funds.service';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { TokenBalanceService } from '@services/token-balance.service';

@Component({
  selector: 'app-educational-pool',
  templateUrl: './educational-pool.component.html',
  styleUrls: ['./educational-pool.component.scss'],
})
export class EducationalPoolComponent implements OnInit {
  public educationalPool: IEducationalPool | undefined;
  public educationalPoolMaterials: IEducationalPoolMaterial[] = [];

  private get poolId(): string {
    return this.activatedRoute.snapshot.params.poolId;
  }

  constructor(
    private educationalPoolsService: EducationalPoolsService,
    private educationalPoolFundsService: EducationalPoolFundsService,
    private confirmationDialogService: ConfirmationDialogService,
    private snackBarService: SnackBarService,
    private tokenBalanceService: TokenBalanceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getPoolData();
    this.getPoolMaterials();
  }

  public openVoteDialog(pool: IEducationalPool): void {
    this.confirmationDialogService
      .openDialog({
        title: 'Vote on the pool',
        content: `Are you sure that you would like to vote that the educational pool "${pool.title}" is interesting / important?`,
      })
      .pipe(filter((val) => !!val))
      .subscribe(
        // TODO: below is a temporary vote recaunting mockup mechanism
        () => {
          this.educationalPool && this.educationalPool.votesNumber++;

          this.snackBarService.openSnackBar(
            'The vote has been cast',
            'success'
          );
        }
      );
  }

  public openFundsDialog(pool: IEducationalPool): void {
    this.educationalPoolFundsService
      .openDialog({
        id: pool.id,
        title: pool.title,
      })
      .subscribe((val) => {
        if (this.educationalPool) {
          this.educationalPool.availableFunds += <number>val.amount;
          this.educationalPool.totalFunds += <number>val.amount;
        }
        this.tokenBalanceService.subtract(<number>val.amount);
        this.snackBarService.openSnackBar('Educational pool funded', 'success');
      });
  }

  private getPoolData(): void {
    this.educationalPoolsService
      .getOne(this.poolId)
      .subscribe((val) => (this.educationalPool = val));
  }

  private getPoolMaterials(): void {
    this.educationalPoolsService
      .getPoolMaterials(this.poolId)
      .subscribe((val) => (this.educationalPoolMaterials = val));
  }
}
