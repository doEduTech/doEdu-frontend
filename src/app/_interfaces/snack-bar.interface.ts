export interface ISnackBarData {
  message: string;
  type: SnackBarType;
}

export type SnackBarType = 'error' | 'success' | 'warning';
