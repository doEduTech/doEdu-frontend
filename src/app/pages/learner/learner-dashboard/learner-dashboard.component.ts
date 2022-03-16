import { Component } from '@angular/core';

import { IHistoryTransaction } from '@interfaces/history-transaction.interface';
import { LearnerTransactionsHistoryService } from '@services/api/learner/learner-transactions-history.service';

@Component({
  selector: 'app-learner-dashboard',
  templateUrl: './learner-dashboard.component.html',
  styleUrls: ['./learner-dashboard.component.scss'],
})
export class LearnerDashboardComponent {
  public transactions: IHistoryTransaction[] = [];

  constructor(
    private learnerTransactionsHistoryService: LearnerTransactionsHistoryService
  ) {}

  ngOnInit(): void {
    this.getTransactionsHistory();
  }

  private getTransactionsHistory(): void {
    this.learnerTransactionsHistoryService
      .getAll()
      .subscribe((val: IHistoryTransaction[]) => {
        this.transactions = val;
      });
  }
}
