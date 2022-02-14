import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { MarketLessonsService } from '@services/api/market/market-lessons.service';
import {
  IMarketLesson,
  IMarketLessonFilters,
} from '@interfaces/market/course.interface';

@Component({
  selector: 'app-market-lessons',
  templateUrl: './market-lessons.component.html',
  styleUrls: ['./market-lessons.component.scss'],
})
export class MarketLessonsComponent implements OnInit {
  private filters: IMarketLessonFilters = {
    video: true,
    audio: true,
    pdf: true,
  };
  public pageSize = 10;
  public recordsCount: number | undefined;
  public pageNumber = 0;

  public marketLessons: IMarketLesson[] = [];

  constructor(private marketLessonsService: MarketLessonsService) {}

  ngOnInit(): void {
    this.getMarketLessons();
  }

  public filterRecords(filters: IMarketLessonFilters): void {
    this.filters = filters;
    this.pageNumber = 0;
    this.getMarketLessons();
  }

  public loadRecords(paginatorEvent: PageEvent): void {
    if (this.pageSize !== paginatorEvent.pageSize) {
      this.pageNumber = 0;
    } else {
      this.pageNumber = paginatorEvent.pageIndex;
    }
    this.pageSize = paginatorEvent.pageSize;
    this.getMarketLessons();
  }

  private getMarketLessons(): void {
    this.marketLessonsService
      .getAll({
        page: this.pageNumber,
        pageSize: this.pageSize,
        video: this.filters.video,
        audio: this.filters.audio,
        pdf: this.filters.pdf,
      })
      .subscribe((val) => {
        this.recordsCount = Number(val.count);
        this.marketLessons = val.rows;
      });
  }
}
