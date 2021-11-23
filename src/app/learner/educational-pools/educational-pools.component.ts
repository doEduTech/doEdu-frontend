import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { filter } from 'rxjs/operators';

import { TokenBalanceService } from '@services/token-balance.service';
import { ConfirmationDialogService } from '@services/shared/confirmation-dialog.service';
import { IEducationalPool } from '@app/_interfaces/learner/educational-pool.interface';
import { EducationalPoolsService } from '@services/learner/api/educational-pools.service';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { EducationalPoolFundsService } from '@services/learner/educational-pool-funds.service';

@Component({
  selector: 'app-educational-pools',
  templateUrl: './educational-pools.component.html',
  styleUrls: ['./educational-pools.component.scss'],
})
export class EducationalPoolsComponent implements OnInit {
  public educationalPools: IEducationalPool[] = [];

  constructor(
    private router: Router,
    private educationalPoolsService: EducationalPoolsService,
    private educationalPoolFundsService: EducationalPoolFundsService,
    private confirmationDialogService: ConfirmationDialogService,
    private snackBarService: SnackBarService,
    private tokenBalanceService: TokenBalanceService
  ) {}

  ngOnInit(): void {
    this.getEducationalPools();
  }

  public navigateToPool(event: MouseEvent, poolId: string): void {
    const target = event.target as HTMLElement;
    if (
      target.classList.contains('modal-launcher-btn') ||
      target.parentElement?.classList.contains('modal-launcher-btn')
    ) {
      return;
    }
    this.router.navigate(['educational-pools', poolId]);
  }

  private getEducationalPools(): void {
    this.educationalPoolsService
      .getMainPools()
      .subscribe((val) => (this.educationalPools = val));
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
          const targetPool = this.educationalPools.find(
            (p) => p.id === pool.id
          );
          targetPool && targetPool.votesNumber && targetPool.votesNumber++;
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
      .pipe(filter((val) => val.confirmed && !!val.amount))
      .subscribe((val) => {
        const targetPool = this.educationalPools.find((p) => p.id === pool.id);
        if (targetPool) {
          targetPool.totalFunds = targetPool.totalFunds + <number>val.amount;
          targetPool.availableFunds =
            targetPool.availableFunds + <number>val.amount;
        }
        this.tokenBalanceService.subtract(<number>val.amount);
        this.snackBarService.openSnackBar('Educational pool funded', 'success');
      });
  }
}
