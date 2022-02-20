import { Component, EventEmitter, Input, Output } from '@angular/core';

import { AuthService } from '@services/auth.service';
import { IMarketLesson } from '@interfaces/market/market-lesson.interface';

@Component({
  selector: 'app-market-video-lesson',
  templateUrl: './market-video-lesson.component.html',
  styleUrls: ['./market-video-lesson.component.scss'],
})
export class MarketVideoLessonComponent {
  @Output()
  public openTippingDialog: EventEmitter<string> = new EventEmitter();

  @Output()
  public openPurchaseDialog: EventEmitter<string> = new EventEmitter();

  @Output()
  public like: EventEmitter<string> = new EventEmitter();

  @Input() public lesson: IMarketLesson | undefined;

  constructor(public authService: AuthService) {}

  public emitOpenTippingDialog() {
    if (this.authService.hasValidAccessToken) {
      this.openTippingDialog.emit();
    }
  }

  public emitOpenPurchaseDialog() {
    if (this.authService.hasValidAccessToken) {
      this.openPurchaseDialog.emit();
    }
  }

  public emitLike() {
    if (this.authService.hasValidAccessToken) {
      this.like.emit();
    }
  }
}
