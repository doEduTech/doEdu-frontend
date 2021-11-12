export interface ITippingDialogConfig {
  recipient: string;
}

export interface ILockedPrizeDialogConfig {
  type: string;
  id: string;
  title: string;
}

export interface IConfirmationDialogConfig {
  confirmationButtonText?: string;
  discardButtonText?: string;
  title?: string;
  content?: string;
}

export interface IPurchaseDialogConfig {
  type: string;
  id: string;
  title: string;
  price: number | undefined;
}
