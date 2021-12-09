import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ITeacherClass } from '@interfaces/teacher/teacher-class.interface';
import { TeacherClassesService } from '@app/_services/api/teacher/teacher-classes.service';

@Component({
  selector: 'app-teacher-class',
  templateUrl: './teacher-class.component.html',
  styleUrls: ['./teacher-class.component.scss'],
})
export class TeacherClassComponent implements OnInit {
  public teacherClass: ITeacherClass | undefined;
  private get teachingClassId(): string {
    return this.activatedRoute.snapshot.params.teacherClassId;
  }
  constructor(
    private activatedRoute: ActivatedRoute,
    private teacherClassesService: TeacherClassesService
  ) {}

  ngOnInit(): void {
    this.getTeacherClass();
  }

  private getTeacherClass(): void {
    this.teacherClassesService
      .getOne(this.teachingClassId)
      .subscribe((val) => (this.teacherClass = val));
  }
}
