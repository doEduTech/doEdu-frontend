import { Pipe, PipeTransform } from '@angular/core';
import { IUserEarningServiceType } from '@app/_interfaces/user-earning.interface';

@Pipe({
  name: 'earning',
})
export class EarningPipe implements PipeTransform {
  transform(value: IUserEarningServiceType, ...args: unknown[]): unknown {
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
