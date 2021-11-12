import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EducationalPoolFundsService } from '@app/_services/educational-pools/educational-pool-funds.service';
import { ConfirmationDialogService } from '@app/_services/shared/confirmation-dialog.service';

import { IEducationalPool } from '@interfaces/educational-pool.interface';
import { EducationalPoolsService } from '@services/api/educational-pools.service';

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
    private confirmationDialogService: ConfirmationDialogService
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
      .getAll()
      .subscribe((val) => (this.educationalPools = val));
  }

  public openVoteDialog(pool: IEducationalPool): void {
    this.confirmationDialogService
      .openDialog({
        title: 'Vote on the pool',
        content: `Are you sure that you would like to vote that the educational pool "${pool.title}" is interesting / important?`,
      })
      .subscribe();
  }

  public openFundsDialog(pool: IEducationalPool): void {
    this.educationalPoolFundsService
      .openDialog({
        id: pool.id,
        title: pool.title,
      })
      .subscribe();
  }
}
