import { Component, OnInit } from '@angular/core';

import { IHistoryTransaction } from '@app/shared/transactions-history/transactions-history.component';
import { TeacherTransactionsHistoryService } from '@services/api/teacher/teacher-transactions-history.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss'],
})
export class TeacherDashboardComponent implements OnInit {
  public transactions: IHistoryTransaction[] = [];

  constructor(
    private teacherTransactionsHistoryService: TeacherTransactionsHistoryService
  ) {}

  ngOnInit(): void {
    this.getTransactionsHistory();
  }

  private getTransactionsHistory(): void {
    this.teacherTransactionsHistoryService
      .getAll()
      .subscribe((val: IHistoryTransaction[]) => {
        this.transactions = val;
      });
  }
}
