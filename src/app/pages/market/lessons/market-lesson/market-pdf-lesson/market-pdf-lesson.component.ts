import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { IMarketLesson } from '@interfaces/market/course.interface';

@Component({
  selector: 'app-market-pdf-lesson',
  templateUrl: './market-pdf-lesson.component.html',
  styleUrls: ['./market-pdf-lesson.component.scss'],
})
export class MarketPdfLessonComponent {
  @Output()
  public openTippingDialog: EventEmitter<string> = new EventEmitter();

  @Output()
  public openPurchaseDialog: EventEmitter<string> = new EventEmitter();

  @Input() public lesson: IMarketLesson | undefined;

  constructor(public authService: AuthService) {}

  public emitOpenTippingDialog() {
    this.openTippingDialog.emit();
  }

  public emitOpenPurchaseDialog() {
    this.openPurchaseDialog.emit();
  }
}
