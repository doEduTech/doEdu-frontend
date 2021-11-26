import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IUserAchievement } from '@app/_interfaces/user-achievement.interface';

@Injectable({
  providedIn: 'root',
})
export class UserAchievementsService {
  private achievements: IUserAchievement[] = [
    {
      id: '1',
      type: 'course',
      title: 'JavaScript',
      created: '09 Nov 2021',
      imgSrc: '/assets/images/js.webp',
      nftTokenId: 'dedu234fpsidajfpoihvckpoi2349807dsfijakldjlkfdsjapkl',
      certificateUrl: 'assets/certificate.pdf',
    },
    {
      id: '2',
      type: 'course',
      title: 'Astronomy',
      created: '15 Aug 2021',
      imgSrc: '/assets/images/astronomy.jpg',
      nftTokenId: 'dedu234kl4dsf2jskh9fhjkshdfjkhdsajkf9uh2fhkjshfu9042',
      certificateUrl: 'assets/certificate.pdf',
    },
    {
      id: '3',
      type: 'course',
      title: 'Ancient history',
      created: '11 Jun 2021',
      imgSrc: '/assets/images/ancient.webp',
      nftTokenId: 'dedu234kljfsd20fn82yusdjkhfd89asdhfjkhsjlkfklsjdfklj',
      certificateUrl: 'assets/certificate.pdf',
    },
  ];
  constructor() {}

  getAll(): Observable<IUserAchievement[]> {
    return of(this.achievements);
  }
}
