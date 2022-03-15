import { Component, Input } from '@angular/core';

import { EChartsOption } from 'echarts';

export interface IHistoryTransaction {
  id: string;
  timestamp: string;
  amount: number;
  type: 'tip' | 'faucet';
}

export interface IHistoryTransactionWithBalance {
  id: string;
  timestamp: Date;
  amount: number;
  value: number;
  type: 'tip' | 'faucet';
}

@Component({
  selector: 'app-transactions-history',
  templateUrl: './transactions-history.component.html',
  styleUrls: ['./transactions-history.component.scss'],
})
export class TransactionsHistoryComponent {
  private _transactions: IHistoryTransaction[] = [];

  public get transactions(): IHistoryTransaction[] {
    return this._transactions;
  }

  @Input() public set transactions(val: IHistoryTransaction[]) {
    this._transactions = val;
    this.setChart();
  }

  public chartOption: EChartsOption = {};

  private setChart(): void {
    const chronologicalBalance = this.getTransactionsWithBalance();

    this.chartOption = {
      xAxis: {
        type: 'category',
        data: chronologicalBalance.map((el) => el.timestamp),
        axisLabel: {
          interval: 2,
          formatter: (label: string): string => {
            return new Date(label).toLocaleDateString();
          },
        },
      } as EChartsOption['xAxis'],
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: chronologicalBalance,
          type: 'line',
        },
      ],
      tooltip: {
        formatter: ({ data }: { data: IHistoryTransactionWithBalance }) => {
          return this.tooltipFormatter(data);
        },
      } as any,
    };
  }

  private tooltipFormatter(data: IHistoryTransactionWithBalance): string {
    const timestamp = data.timestamp.toLocaleString();
    let transactionTitle;
    if (data.type === 'tip') {
      const transactionDirection = data.amount > 0 ? 'Recieve' : 'Sent';
      transactionTitle = `${transactionDirection} tip: ${Math.abs(
        data.amount
      )}`;
    }
    if (data.type === 'faucet') {
      transactionTitle = `Recieved faucet tokens: ${data.amount}`;
    }
    return `
      ${timestamp}<br/>
      ${transactionTitle}<br/>
      <strong>Balance: ${data.value}</strong>
    `;
  }

  private getTransactionsWithBalance(): IHistoryTransactionWithBalance[] {
    let value = 0;
    return this.transactions.map((el, idx) => {
      value = idx === 0 ? el.amount : value + el.amount;
      return {
        ...el,
        timestamp: new Date(el.timestamp),
        value,
      };
    });
  }
}
