import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {
  ITeacherLesson,
  ITeacherLessonUpdateForm,
} from '@interfaces/teacher/teacher-lesson.interface';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { TeacherLessonsService } from '@services/api/teacher/teacher-lessons.service';
import { stringify } from '@angular/compiler/src/util';

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

  public lesson: ITeacherLesson | undefined;
  public lessonContentFile: File | undefined;
  public previewFile: File | undefined;
  public previewSrc: string | undefined;
  public isPreviewFileChanged = false;

  public form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  public get lessonId(): string {
    return this.activatedRoute.snapshot.params.lessonId;
  }

  constructor(
    private teacherLessonsService: TeacherLessonsService,
    private snackBarService: SnackBarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this.lessonId) {
      this.getLesson();
    }
  }

  public createLesson(): void {
    const formData = this.form.value;

    if (this.form.valid && this.lessonContentFile) {
      this.teacherLessonsService
        .create(this.lessonContentFile, this.previewFile, formData)
        .subscribe(() => {
          this.proceedSuccess();
        });
    } else {
      this.showFileError = true;
    }
  }

  private proceedSuccess(): void {
    this.router.navigateByUrl('teacher/lessons');
    const message = this.lessonId
      ? 'Lesson sucessfully updated'
      : 'Lesson successfully created';
    this.snackBarService.openSnackBar(message, 'success');
  }

  public addPreview(): void {
    this.previewInput.nativeElement.click();
  }

  public onUploadPreviewFile(ev: Event): void {
    const input: Partial<HTMLInputElement> | null = ev.target;
    const file: File | null | undefined =
      input && input.files && input.files[0];
    if (file) {
      this.isPreviewFileChanged = true;
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
    this.isPreviewFileChanged = true;
    this.previewSrc = undefined;
    this.previewFile = undefined;
  }

  public updateLesson(): void {
    const formData = this.form.value;

    if (this.lesson && this.form.valid) {
      const formTitle = formData.title;
      const formDescription = formData.description;
      const changedData: ITeacherLessonUpdateForm = {};

      if (this.lesson.title !== formTitle) {
        changedData.title = formTitle;
      }

      if (this.lesson.description !== formDescription) {
        changedData.description = formDescription;
      }

      if (this.isPreviewFileChanged) {
        changedData.previewFile = this.previewFile ? this.previewFile : null;
      }
      this.teacherLessonsService
        .update(this.lessonId, changedData)
        .subscribe(() => this.proceedSuccess());
    }
  }

  public displayCopyingConfirmation(event: Event): void {
    this.snackBarService.openSnackBar('IPFS file id copied', 'success');
  }

  private getLesson(): void {
    this.teacherLessonsService.get(this.lessonId).subscribe((val) => {
      this.lesson = val;
      this.fillForm();
    });
  }

  private fillForm(): void {
    this.form.get('title')?.setValue(this.lesson?.title);
    this.form.get('description')?.setValue(this.lesson?.description);
  }
}
