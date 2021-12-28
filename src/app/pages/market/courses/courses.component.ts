import { Component, OnInit } from '@angular/core';

import { CoursesService } from '@app/_services/api/learner/courses.service';
import { ICourse } from '@app/_interfaces/market/course.interface';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  public courses: ICourse[] = [];

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  private getCourses(): void {
    this.coursesService.getAll().subscribe((val) => (this.courses = val));
  }
}
