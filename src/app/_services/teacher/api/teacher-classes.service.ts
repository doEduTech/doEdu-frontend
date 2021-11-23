import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ITeacherClass } from '@interfaces/teacher/teacher-class.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherClassesService {
  public classes: ITeacherClass[] = [
    {
      id: '1',
      title: 'Botany adventure class',
      membersNumber: 10,
      imgSrc: 'assets/images/botany_class.jpg',
      materials: {
        videos: 10,
        homeAssignments: 15,
        lessons: 5,
        texts: 10,
      },
    },
    {
      id: '2',
      title: 'Neurobiology enthusiasts group',
      membersNumber: 15,
      imgSrc: 'assets/images/neuro_class.png',
      materials: {
        videos: 11,
        homeAssignments: 20,
        lessons: 7,
        texts: 9,
      },
    },
    {
      id: '3',
      title: 'Muscles grow group',
      membersNumber: 10,
      imgSrc: 'assets/images/anatomy_class.webp',
      materials: {
        videos: 11,
        homeAssignments: 21,
        lessons: 12,
        texts: 15,
      },
    },
  ];

  constructor() {}

  getAll(): Observable<ITeacherClass[]> {
    return of(this.classes);
  }
}
