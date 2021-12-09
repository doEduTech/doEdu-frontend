import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
  IUserEarning,
  IUserEarningServiceType,
} from '@interfaces/user-earning.interface';

@Injectable({
  providedIn: 'root',
})
export class UserEarningsService {
  private earnings: IUserEarning[] = [
    {
      id: '1',
      amount: 5,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '20 Nov 2021',
      service: 'tip',
    },
    {
      id: '2',
      amount: 2,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '16 Nov 2021',
      service: 'tip',
    },
    {
      id: '3',
      amount: 7,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '14 Nov 2021',
      service: 'tip',
    },
    {
      id: '4',
      amount: 3,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '11 Nov 2021',
      service: 'tip',
    },
    {
      id: '5',
      amount: 4,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '08 Nov 2021',
      service: 'tip',
    },
    {
      id: '6',
      amount: 100,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '04 Nov 2021',
      service: 'educationalPool',
    },
    {
      id: '7',
      amount: 7,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '28 Oct 2021',
      service: 'tip',
    },
    {
      id: '8',
      amount: 5,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '25 Oct 2021',
      service: 'tip',
    },
    {
      id: '9',
      amount: 10,
      sourceId: '5',
      sourceType: <IUserEarningServiceType>'course',
      sourceTitle: 'How to survive blockchain apocalypse',
      timestamp: '10 Oct 2021',
      service: 'lockedPrize',
    },
  ];

  getAll(): Observable<IUserEarning[]> {
    return of(this.earnings);
  }
}
