import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { SnackBarService } from '@services/shared/snack-bar.service';
import {
  EnftMintingStatus,
  ITeacherLesson,
} from '@interfaces/teacher/teacher-lesson.interface';
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
  public EnftMintingStatus = EnftMintingStatus;

  public lessons: ITeacherLesson[] | undefined;

  constructor(
    private teacherLessonsService: TeacherLessonsService,
    private snackBarService: SnackBarService
  ) {}

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

  public displayNFTCopyingConfirmation(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.snackBarService.openSnackBar('NFT id copied', 'success');
  }

  public displayIPFSCopyingConfirmation(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.snackBarService.openSnackBar('IPFS file id copied', 'success');
  }

  private loadLessons(): void {
    this.teacherLessonsService
      .getAll({ page: this.pageNumber, pageSize: this.pageSize })
      .subscribe((val) => {
        this.recordsCount = Number(val.count);
        this.lessons = val.rows;
      });
  }
}
