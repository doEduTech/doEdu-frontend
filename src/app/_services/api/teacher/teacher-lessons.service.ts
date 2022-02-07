import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import {
  ITeacherLesson,
  ITeacherLessonForm,
} from '@interfaces/teacher/teacher-lesson.interface';
import { IPaginatedData } from '@interfaces/common';

@Injectable({ providedIn: 'root' })
export class TeacherLessonsService {
  private baseEndpoint = `${environment.apiUrl}/teacher/lessons`;

  constructor(private http: HttpClient) {}

  public create(
    contentFile: File,
    previewFile: File | null = null,
    restData: ITeacherLessonForm
  ): Observable<ITeacherLesson> {
    const formData = new FormData();
    formData.append('content', contentFile, contentFile.name);
    formData.append('title', restData.title);

    if (previewFile) {
      formData.append('preview', previewFile, previewFile.name);
    }

    if (restData.description) {
      formData.append('description', restData.description);
    }

    return this.http.post<ITeacherLesson>(this.baseEndpoint, formData);
  }

  public getAll(
    pagination: { page: number; pageSize: number } = { page: 0, pageSize: 10 }
  ): Observable<IPaginatedData<ITeacherLesson>> {
    const endpoint = `${this.baseEndpoint}?page=${pagination.page}&pageSize=${pagination.pageSize}`;
    return this.http.get<IPaginatedData<ITeacherLesson>>(endpoint);
  }

  public get(lessonId: string): Observable<ITeacherLesson> {
    const endpoint = `${this.baseEndpoint}/${lessonId}`;
    return this.http.get<ITeacherLesson>(endpoint);
  }
}
