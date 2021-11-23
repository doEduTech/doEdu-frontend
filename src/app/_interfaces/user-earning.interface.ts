export interface IUserEarning {
  id: string;
  amount: number;
  sourceType: string; // TODO: switch to type when types of materials will be defined
  sourceTitle: string;
  sourceId: string;
  timestamp: string;
  service: IUserEarningServiceType;
}

export type IUserEarningServiceType =
  | 'tip'
  | 'purchase'
  | 'educationalPool'
  | 'lockedPrize';
