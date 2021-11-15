import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {
  IEducationalPool,
  IEducationalPoolMaterial,
} from '@interfaces/educational-pool.interface';

@Injectable({
  providedIn: 'root',
})
export class EducationalPoolsService {
  private educationalPools: IEducationalPool[] = [
    {
      id: '1',
      title: 'Biology',
      votesNumber: 236,
      parentPoolId: null,
      parentPoolTitle: null,
      totalFunds: 5455,
      availableFunds: 2400,
      imgSrc: '/assets/images/biology.jpg',
      description: `
        Biology is the scientific study of life.
        It is a natural science with a broad scope but has several unifying themes that tie it together as a single,
        coherent field. For instance, all organisms are made up of cells that process hereditary information encoded in genes,
        which can be transmitted to future generations. Another major theme is evolution, which explains the unity and diversity of life.
        Energy processing is also important to life as it allows organisms to move, grow, and reproduce.
        Finally, all organisms are able to regulate their own internal environments.`,
    },
    {
      id: '2',
      title: 'Chemistry',
      votesNumber: 144,
      parentPoolId: null,
      parentPoolTitle: null,
      totalFunds: 7455,
      availableFunds: 3140,
      imgSrc: '/assets/images/chemistry.jpg',
      description: `
        Chemistry is the scientific study of the properties and behavior of matter.
        It is a natural science that covers the elements that make up matter to the compounds composed of atoms,
        molecules and ions: their composition, structure, properties,
        behavior and the changes they undergo during a reaction with other substances.
      `,
    },
    {
      id: '3',
      title: 'Physics',
      votesNumber: 376,
      parentPoolId: null,
      parentPoolTitle: null,
      totalFunds: 10455,
      availableFunds: 5500,
      imgSrc: '/assets/images/physics.jpg',
      description: `
        Physics is the natural science that studies matter,
        its fundamental constituents, its motion and behavior through space and time,
        and the related entities of energy and force.
        Physics is one of the most fundamental scientific disciplines,
        and its main goal is to understand how the universe behaves.`,
    },
  ];

  public educationalPoolsMaterials: IEducationalPoolMaterial[] = [
    {
      id: '1',
      type: 'course',
      title: 'Muscle and movement',
      poolId: '1',
      author: 'Edith Pope',
      imgSrc: '/assets/images/muscle.jpg',
      created: '04 Oct 2021',
      gatheredFunds: 542,
      votes: 106,
    },
    {
      id: '2',
      type: 'course',
      title: 'Neurobiology',
      poolId: '1',
      author: 'Arnie Pugh',
      imgSrc: '/assets/images/neurobiology.png',
      created: '11 Nov 2021',
      gatheredFunds: null,
      votes: 11,
    },
    {
      id: '3',
      type: 'course',
      title: 'Genetics',
      poolId: '1',
      author: 'Michele Holding',
      imgSrc: '/assets/images/genetics.webp',
      created: '10 Nov 2021',
      gatheredFunds: 152,
      votes: 43,
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
