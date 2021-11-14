import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
  IEducationalPool,
  IEducationalPoolMaterial,
} from 'src/app/_interfaces/educational-pool.interface';

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

  public educationalPoolsMaterials: IEducationalPoolMaterial[] = [
    {
      id: '1',
      type: 'course',
      title: 'Astronomy',
      poolId: '3',
    },
  ];

  getMainPools(): Observable<IEducationalPool[]> {
    return of(this.educationalPools);
  }

  getOne(id: string): Observable<IEducationalPool | undefined> {
    const result = this.educationalPools.find((pool) => pool.id === id);
    return of(result);
  }

  getPoolMaterials(poolId: string): Observable<IEducationalPoolMaterial[]> {
    const result = this.educationalPoolsMaterials.filter(
      (material) => material.poolId === poolId
    );
    return of(result);
  }
}
