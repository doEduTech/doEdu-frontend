import { Router, ActivatedRoute } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import {
  EnftMintingStatus,
  ITeacherLesson,
  ITeacherLessonUpdateForm,
} from '@interfaces/teacher/teacher-lesson.interface';
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

  public lesson: ITeacherLesson | undefined;
  public lessonContentFile: File | undefined;
  public previewFile: File | undefined;
  public previewSrc: string | undefined;
  public isPreviewFileChanged = false;
  public EnftMintingStatus = EnftMintingStatus;

  public form = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', Validators.maxLength(500)),
    createNFT: new FormControl(true),
  });

  public get titleFormControl(): AbstractControl {
    return <AbstractControl>this.form.get('title');
  }

  public get descriptionFormControl(): AbstractControl {
    return <AbstractControl>this.form.get('description');
  }

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
    this.form.markAsDirty();

    if (this.form.valid && this.lessonContentFile) {
      this.saveLesson();
    } else if (!this.lessonContentFile) {
      this.showFileError = true;
    }
  }

  private saveLesson(): void {
    this.teacherLessonsService
      .create(<File>this.lessonContentFile, this.previewFile, {
        title: this.form.value.title,
        description: this.form.value.description,
        createNFT: this.form.value.createNFT,
      })
      .subscribe(() => {
        this.proceedSuccess();
      });
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

    this.form.markAsDirty();

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

  public displayNFTCopyingConfirmation(): void {
    this.snackBarService.openSnackBar('NFT id file id copied', 'success');
  }

  public displayIPFSCopyingConfirmation(): void {
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
