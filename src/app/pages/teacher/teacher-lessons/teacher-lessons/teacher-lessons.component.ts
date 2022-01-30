import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { ITeacherLesson } from '@interfaces/teacher/teacher-lesson.interface';
import { TeacherLessonsService } from '@services/api/teacher/teacher-lessons.service';

@Component({
  selector: 'app-teacher-lessons',
  templateUrl: './teacher-lessons.component.html',
  styleUrls: ['./teacher-lessons.component.scss'],
})
export class TeacherLessonsComponent implements OnInit {
  public pageSize = 10;
  public recordsCount: number | undefined;
  public pageNumber = 0;

  public lessons: ITeacherLesson[] | undefined;

  constructor(private teacherLessonsService: TeacherLessonsService) {}

  ngOnInit(): void {
    this.loadLessons();
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
    this.teacherLessonsService
      .getAll({ page: this.pageNumber, pageSize: this.pageSize })
      .subscribe((val) => {
        this.recordsCount = val.count;
        this.lessons = val.rows;
      });
  }
}
