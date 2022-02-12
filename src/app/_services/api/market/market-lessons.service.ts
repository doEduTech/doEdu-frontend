import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  IMarketLesson,
  IMarketLessonsQueryParams,
} from '@interfaces/market/course.interface';
import { environment } from '@env/environment';
import { IPaginatedData } from '@interfaces/common';

@Injectable({ providedIn: 'root' })
export class MarketLessonsService {
  private baseEndpoint = `${environment.apiUrl}/market/lessons`;

  constructor(private http: HttpClient) {}

  public getAll(
    queryParams: IMarketLessonsQueryParams = {
      page: 0,
      pageSize: 10,
      video: true,
      audio: true,
      pdf: true,
    }
  ): Observable<IPaginatedData<IMarketLesson>> {
    const endpoint = `${this.baseEndpoint}?page=${queryParams.page}&pageSize=${queryParams.pageSize}&video=${queryParams.video}&audio=${queryParams.audio}&pdf=${queryParams.pdf}`;
    return this.http.get<IPaginatedData<IMarketLesson>>(endpoint);
  }

  public get(lessonId: string): Observable<IMarketLesson> {
    const endpoint = `${this.baseEndpoint}/${lessonId}`;
    return this.http.get<IMarketLesson>(endpoint);
  }
}
