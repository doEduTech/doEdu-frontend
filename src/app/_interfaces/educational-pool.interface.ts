export interface IEducationalPool {
  id: string;
  title: string;
  votesNumber: number;
  parentPoolId: string | null;
  parentPoolTitle: string | null;
  totalFunds: number;
  availableFunds: number;
}

export interface IEducationalPoolFundsDialogConfig {
  id: string;
  title: string;
}

export interface IEducationalPoolMaterial {
  id: string;
  type: string; // TODO further: type -> course / test or quiz / lesson / etc.
  title: string;
  poolId: string;
}
