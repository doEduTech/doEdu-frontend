import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Subscription } from 'rxjs';

import { IMarketLessonFilters } from '@interfaces/market/course.interface';

@Component({
  selector: 'app-market-lessons-filters',
  templateUrl: './market-lessons-filters.component.html',
  styleUrls: ['./market-lessons-filters.component.scss'],
})
export class MarketLessonsFiltersComponent implements OnInit {
  @Output()
  public filtersChange: EventEmitter<IMarketLessonFilters> = new EventEmitter();

  public form = new FormGroup({
    video: new FormControl(true),
    audio: new FormControl(true),
    pdf: new FormControl(true),
    minPrice: new FormControl(null),
    maxPrice: new FormControl(null),
  });
  private formSub$: Subscription | undefined;

  ngOnInit(): void {
    this.subscribeFormValueChanges();
  }

  ngOnDestroy(): void {
    if (this.formSub$) {
      this.formSub$.unsubscribe();
    }
  }

  private subscribeFormValueChanges(): void {
    this.formSub$ = this.form.valueChanges.subscribe((val) => {
      this.filtersChange.emit(this.form.value);
    });
  }

  public resetFilters(): void {
    this.form.get('video')?.setValue(true);
    this.form.get('audio')?.setValue(true);
    this.form.get('pdf')?.setValue(true);
    this.form.get('minPrice')?.setValue(null);
    this.form.get('maxPrice')?.setValue(null);
  }
}
