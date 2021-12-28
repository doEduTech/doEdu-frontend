import { Component, OnInit } from '@angular/core';

import { TeacherClassesService } from '@app/_services/api/teacher/teacher-classes.service';
import { ITeacherClass } from '@interfaces/teacher/teacher-class.interface';

@Component({
  selector: 'app-teacher-classes',
  templateUrl: './teacher-classes.component.html',
  styleUrls: ['./teacher-classes.component.scss'],
})
export class TeacherClassesComponent implements OnInit {
  public teachingClasses: ITeacherClass[] | undefined;

  constructor(private teacherClassesService: TeacherClassesService) {}

  ngOnInit(): void {
    this.getClasses();
  }

  public getClasses(): void {
    this.teacherClassesService
      .getAll()
      .subscribe((val) => (this.teachingClasses = val));
  }
}
