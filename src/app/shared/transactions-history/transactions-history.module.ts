import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxEchartsModule } from 'ngx-echarts';

import { TransactionsHistoryComponent } from './transactions-history.component';

@NgModule({
  declarations: [TransactionsHistoryComponent],
  exports: [TransactionsHistoryComponent],
  imports: [
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
})
export class TransactionsHistoryModule {}
