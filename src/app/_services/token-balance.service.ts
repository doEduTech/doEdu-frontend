import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

// TODO: this is a temporary service to handle token balance for mockups purposes

@Injectable({
  providedIn: 'root',
})
export class TokenBalanceService {
  public tokenBalance$ = new BehaviorSubject<number>(512);

  public add(value: number): void {
    const newBalance = this.tokenBalance$.value + value;
    this.tokenBalance$.next(newBalance);
  }

  public subtract(value: number): void {
    const newBalance = this.tokenBalance$.value - value;
    this.tokenBalance$.next(newBalance);
  }
}
