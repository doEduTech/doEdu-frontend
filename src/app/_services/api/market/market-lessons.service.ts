import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import {
  IMarketLesson,
  IMarketLessonsQueryParams,
} from '@interfaces/market/course.interface';
import { environment } from '@env/environment';
import { IPaginatedData } from '@interfaces/common';

const defaultQueryParams = {
  page: 0,
  pageSize: 10,
  video: true,
  audio: true,
  pdf: true,
};

@Injectable({ providedIn: 'root' })
export class MarketLessonsService {
  private baseEndpoint = `${environment.apiUrl}/market/lessons`;

  constructor(private http: HttpClient) {}

  public getAll(
    queryParams = defaultQueryParams
  ): Observable<IPaginatedData<IMarketLesson>> {
    const params = new HttpParams({
      fromObject: queryParams,
    });
    return this.http.get<IPaginatedData<IMarketLesson>>(this.baseEndpoint, {
      params,
    });
  }

  public get(lessonId: string): Observable<IMarketLesson> {
    const endpoint = `${this.baseEndpoint}/${lessonId}`;
    return this.http.get<IMarketLesson>(endpoint);
  }
}
