import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

import { ILearnerLesson } from '@interfaces/learner/learner-lesson.interface';
import { LearnerLessonsService } from '@services/api/learner/learner-lessons.service';

@Component({
  selector: 'app-learner-liked-lessons',
  templateUrl: './learner-liked-lessons.component.html',
  styleUrls: ['./learner-liked-lessons.component.scss'],
})
export class LeadnerLikedLessonsComponent implements OnInit {
  public pageSize = 10;
  public recordsCount: number | undefined;
  public pageNumber = 0;
  public lessons: ILearnerLesson[] | undefined;

  constructor(
    private learnerLessonsService: LearnerLessonsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadLessons();
  }

  public redirectToLesson(lessonId: string) {
    console.log('lessonId', lessonId);
    this.router.navigate(['/market', 'lessons', lessonId]);
  }

  public loadRecords(paginatorEvent: PageEvent): void {
    if (this.pageSize !== paginatorEvent.pageSize) {
      this.pageNumber = 0;
    } else {
      this.pageNumber = paginatorEvent.pageIndex;
    }
    this.pageSize = paginatorEvent.pageSize;
    this.loadLessons();
  }

  private loadLessons(): void {
    this.learnerLessonsService
      .getLiked({ page: this.pageNumber, pageSize: this.pageSize })
      .subscribe((val) => {
        this.recordsCount = Number(val.count);
        this.lessons = val.rows;
      });
  }
}
