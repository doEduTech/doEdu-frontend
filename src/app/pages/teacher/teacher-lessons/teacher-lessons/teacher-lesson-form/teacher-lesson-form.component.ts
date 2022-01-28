import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SnackBarService } from '@services/shared/snack-bar.service';
import { TeacherLessonsService } from '@services/api/teacher/teacher-lessons.service';

@Component({
  selector: 'app-teacher-lesson-form',
  templateUrl: './teacher-lesson-form.component.html',
  styleUrls: ['./teacher-lesson-form.component.scss'],
})
export class TeacherLessonFormComponent implements OnInit {
  @ViewChild('attachmentInput')
  public attachmentInput!: ElementRef;
  @ViewChild('previewInput')
  public previewInput!: ElementRef;
  public showFileError = false;

  public lessonContentFile: File | undefined;
  public previewFile: File | undefined;
  public previewSrc: string | undefined;

  public form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  constructor(
    private teacherLessonsService: TeacherLessonsService,
    private snackBarService: SnackBarService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public createLesson(): void {
    // wait for upload finish and send the rest data
    const formData = this.form.value;

    if (this.lessonContentFile) {
      this.teacherLessonsService
        .create(this.lessonContentFile, this.previewFile, formData)
        .subscribe(() => {
          this.router.navigateByUrl('teacher/lessons');
          this.snackBarService.openSnackBar(
            'Lesson successfully created',
            'success'
          );
        });
    } else {
      this.showFileError = true;
    }
  }

  public addPreview(): void {
    this.previewInput.nativeElement.click();
  }

  public onUploadPreviewFile(ev: Event): void {
    const input: Partial<HTMLInputElement> | null = ev.target;
    const file: File | null | undefined =
      input && input.files && input.files[0];
    if (file) {
      this.previewFile = file;
      this.previewSrc = URL.createObjectURL(file);
    }
  }

  public addAttachment(): void {
    this.attachmentInput.nativeElement.click();
    this.showFileError = false;
  }

  public onUploadAttachmentFile(ev: Event): void {
    const input: Partial<HTMLInputElement> | null = ev.target;
    const file: File | null | undefined =
      input && input.files && input.files[0];
    if (file) {
      this.lessonContentFile = file;
    }
  }

  public removePreview(): void {
    this.previewSrc = undefined;
    this.previewFile = undefined;
  }
}
