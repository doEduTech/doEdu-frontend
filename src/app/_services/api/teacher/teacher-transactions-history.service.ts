import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { IHistoryTransaction } from '@app/shared/transactions-history/transactions-history.component';

@Injectable({ providedIn: 'root' })
export class TeacherTransactionsHistoryService {
  private baseEndpoint = `${environment.apiUrl}/teacher/transactions-history`;

  constructor(private http: HttpClient) {}

  public getAll(): Observable<IHistoryTransaction[]> {
    return this.http.get<IHistoryTransaction[]>(this.baseEndpoint).pipe(
      map((results) => {
        return results.sort((prev, next) => {
          const prevDatetime = new Date(prev.timestamp).getTime();
          const nextDatetime = new Date(next.timestamp).getTime();
          return prevDatetime - nextDatetime;
        });
      })
    );
  }
}
