import { IMarketLesson } from './../../../_interfaces/market/course.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { IPaginatedData } from '@interfaces/common';

@Injectable({ providedIn: 'root' })
export class MarketLessonsService {
  private baseEndpoint = `${environment.apiUrl}/market/lessons`;

  constructor(private http: HttpClient) {}

  public getAll(
    pagination: { page: number; pageSize: number } = { page: 0, pageSize: 10 }
  ): Observable<IPaginatedData<IMarketLesson>> {
    const endpoint = `${this.baseEndpoint}?page=${pagination.page}&pageSize=${pagination.pageSize}`;
    return this.http.get<IPaginatedData<IMarketLesson>>(endpoint);
  }

  public get(lessonId: string): Observable<IMarketLesson> {
    const endpoint = `${this.baseEndpoint}/${lessonId}`;
    return this.http.get<IMarketLesson>(endpoint);
  }
}
