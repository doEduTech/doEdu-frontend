export interface IEducationalPool {
  id: string;
  title: string;
  votesNumber: number;
  parentPoolId: string | null;
  parentPoolTitle: string | null;
  totalFunds: number;
  availableFunds: number;
  description: string;
  imgSrc: string;
}

export interface IEducationalPoolFundsDialogConfig {
  id: string;
  title: string;
}

export interface IEducationalPoolMaterial {
  id: string;
  type: string; // TODO further: type -> course / test or quiz / lesson / etc.
  title: string;
  author: string;
  poolId: string;
  imgSrc: string;
  created: string;
  gatheredFunds: number | null;
  votes: number | null;
}
