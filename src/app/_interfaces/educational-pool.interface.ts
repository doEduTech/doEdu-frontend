export interface IEducationalPool {
  id: string;
  title: string;
  votesNumber: number;
  parentPoolId: string | null;
  parentPoolTitle: string | null;
  totalFunds: number;
  availableFunds: number;
}
