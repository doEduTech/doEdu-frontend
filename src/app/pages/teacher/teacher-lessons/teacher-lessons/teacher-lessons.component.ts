import { Component, OnInit } from '@angular/core';

import { ITeacherLesson } from '@interfaces/teacher/teacher-lesson.interface';
import { TeacherLessonsService } from '@services/api/teacher/teacher-lessons.service';

@Component({
  selector: 'app-teacher-lessons',
  templateUrl: './teacher-lessons.component.html',
  styleUrls: ['./teacher-lessons.component.scss'],
})
export class TeacherLessonsComponent implements OnInit {
  public lessons: ITeacherLesson[] | undefined;

  constructor(private teacherLessonsService: TeacherLessonsService) {}

  ngOnInit(): void {
    this.loadLessons();
  }

  private loadLessons(): void {
    this.teacherLessonsService.getAll().subscribe((val) => {
      this.lessons = val;
    });
  }
}
