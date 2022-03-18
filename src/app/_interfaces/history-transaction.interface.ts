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
