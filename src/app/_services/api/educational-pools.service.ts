import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IEducationalPool } from 'src/app/_interfaces/educational-pool.interface';

@Injectable({
  providedIn: 'root',
})
export class EducationalPoolsService {
  private educationalPools = [
    {
      id: '1',
      title: 'Biology',
      votesNumber: 236,
      parentPoolId: null,
      parentPoolTitle: null,
      totalFunds: 5455,
      availableFunds: 2400,
    },
    {
      id: '2',
      title: 'Chemistry',
      votesNumber: 144,
      parentPoolId: null,
      parentPoolTitle: null,
      totalFunds: 7455,
      availableFunds: 3140,
    },
    {
      id: '3',
      title: 'Physics',
      votesNumber: 376,
      parentPoolId: null,
      parentPoolTitle: null,
      totalFunds: 10455,
      availableFunds: 5500,
    },
  ];

  getAll(): Observable<IEducationalPool[]> {
    return of(this.educationalPools);
  }
}
