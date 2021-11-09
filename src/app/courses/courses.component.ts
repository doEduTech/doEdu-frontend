import { Component, OnInit } from '@angular/core';

import { ICourse } from '../_interfaces/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
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
  ];

  constructor() {}

  ngOnInit(): void {}
}
