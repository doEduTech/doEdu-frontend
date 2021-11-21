import { Pipe, PipeTransform } from '@angular/core';

import { IUserEarningServiceType } from '@interfaces/user-earning.interface';

@Pipe({
  name: 'earning',
})
export class EarningPipe implements PipeTransform {
  transform(value: IUserEarningServiceType): string {
    switch (value) {
      case 'lockedPrize':
        return 'locked prize';
      case 'educationalPool':
        return 'educational pool';
      default:
        return value;
    }
  }
}
