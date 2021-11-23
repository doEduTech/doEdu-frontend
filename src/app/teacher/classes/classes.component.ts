import { Component, OnInit } from '@angular/core';

import { TeacherClassesService } from '@services/teacher/api/teacher-classes.service';
import { ITeacherClass } from '@interfaces/teacher/teacher-class.interface';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss'],
})
export class ClassesComponent implements OnInit {
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
