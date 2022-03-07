import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IPaginatedData } from '@interfaces/common';
import { ILearnerLesson } from '@interfaces/learner/learner-lesson.interface';

@Injectable({ providedIn: 'root' })
export class LearnerLessonsService {
  private baseEndpoint = `${environment.apiUrl}/learner/dashboard-lessons`;

  constructor(private http: HttpClient) {}

  public getLiked(
    pagination: { page: number; pageSize: number } = { page: 0, pageSize: 10 }
  ): Observable<IPaginatedData<ILearnerLesson>> {
    const endpoint = `${this.baseEndpoint}/liked?page=${pagination.page}&pageSize=${pagination.pageSize}`;

    return this.http.get<IPaginatedData<ILearnerLesson>>(endpoint);
  }
}
