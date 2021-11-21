import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'src/app/_services/api/courses.service';

import { ICourseComment } from 'src/app/_interfaces/course.interface';

@Component({
  selector: 'app-course-comments',
  templateUrl: './course-comments.component.html',
  styleUrls: ['./course-comments.component.scss'],
})
export class CourseCommentsComponent implements OnInit {
  public comments: ICourseComment[] | undefined;
  private get courseId(): string {
    return this.activatedRoute.snapshot.params.courseId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  private getComments(): void {
    this.coursesService
      .getCourseComments(this.courseId)
      .subscribe((val) => (this.comments = val));
  }
}