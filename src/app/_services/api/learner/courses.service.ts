import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ICourseComment } from '@app/_interfaces/market/course.interface';
import { ICourse } from '@app/_interfaces/market/course.interface';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  public comments: ICourseComment[] = [
    {
      id: '1',
      courseId: '1',
      text: 'Very good course. Now I am better galaxy citizen :)',
      author: 'Jeremy Novak',
      created: '01 Nov 2021',
    },
    {
      id: '2',
      courseId: '1',
      text: 'Now I feel that I know much more about the galaxies. Thanks!',
      author: 'Adrianna Olskova',
      created: '03 Nov 2021',
    },
    {
      id: '3',
      courseId: '1',
      text: `I didn't know that helium, hydrogen, oxygen, carbon are the most common elements in the universe. There may be life everywhere.`,
      author: 'David Krueger',
      created: '15 Oct 2021',
    },

    {
      id: '4',
      courseId: '2',
      text: 'Now I know enough to make my website by my own and with my rules.',
      author: 'Abigail Mckinney',
      created: '04 Nov 2021',
    },
    {
      id: '5',
      courseId: '2',
      text: 'Finally I undestrood the closures. Thanks!',
      author: 'Marcel Krause',
      created: '03 Nov 2021',
    },
    {
      id: '6',
      courseId: '2',
      text: `Good starting point for any person with aspirations of becoming a web develeper.`,
      author: 'Evie-May Firth',
      created: '15 Oct 2021',
    },
  ];
  public courses: ICourse[] = [
    {
      id: '1',
      title: 'Astronomy',
      description:
        'This course is for anyone who wants to learn more about astronomy events, cosmology, planets, galaxies, asteroids, astrophotography, the Big Bang, celestial objects and phenomena.',
      imgSrc: '/assets/images/astronomy.jpg',
      author: 'Kaira Rankin',
      price: 0,
    },
    {
      id: '2',
      title: 'JavaScript',
      description:
        'JavaScript is the most popular programming language that let you do almost everything. This course is for anyone who wants to start the journey with the most promising coding area.',
      imgSrc: '/assets/images/js.webp',
      author: 'Niyah Fitzpatrick',
      price: 20,
    },
    {
      id: '3',
      title: 'Ancient history',
      description:
        'Learn about past events from the beginning of writing and recorded human history and extending as far as post-classical history.',
      imgSrc: '/assets/images/ancient.webp',
      author: 'Niyah Fitzpatrick',
      price: 0,
    },
    {
      id: '4',
      title: 'Startup enterpreneur',
      description:
        'Learn how to seek, develop, and validate a scalable business model and rise a profitable company.',
      imgSrc: '/assets/images/startup.jpeg',
      author: 'Dillan Oneill',
      price: 0,
    },
    {
      id: '5',
      title: 'How to survive blockchain apocalypse',
      description:
        'A blockchain is a growing list of records, called blocks, that are linked together using cryptography. Each block contains a cryptographic hash of the previous block, a timestamp, and transaction data.',
      imgSrc: '/assets/images/blockchain.jpg',
      author: 'John Doe',
      price: 0,
    },
  ];

  constructor() {}

  getOne(id: string): Observable<ICourse | undefined> {
    const course = this.courses.find((c) => c.id === id);
    return of(course);
  }

  getAll(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getCourseComments(courseId: string): Observable<ICourseComment[]> {
    const comments = this.comments.filter((c) => c.courseId === courseId);
    return of(comments);
  }
}
