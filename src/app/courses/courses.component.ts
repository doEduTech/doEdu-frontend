import { Component, OnInit } from '@angular/core';

import { CoursesService } from '@services/api/courses.service';
import { ICourse } from '@interfaces/course.interface';

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
