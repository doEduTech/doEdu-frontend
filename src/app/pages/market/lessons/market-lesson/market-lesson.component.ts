import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';

import { BlockchainService } from '@services/api/blockchain.service';
import { IMarketLesson } from '@interfaces/market/course.interface';
import { PurchaseForSelfDialogService } from '@services/shared/purchase-for-self-dialog.service';
import { TippingModalService } from '@services/shared/tipping-dialog.service';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { MarketLessonsService } from '@services/api/market/market-lessons.service';
import { PassphraseAuthorizationDialogService } from '@services/shared/passphrase-authoization-dialog.service';

@Component({
  selector: 'app-market-lesson',
  templateUrl: './market-lesson.component.html',
  styleUrls: ['./market-lesson.component.scss'],
})
export class MarketLessonComponent implements OnInit {
  public lesson: IMarketLesson | undefined;

  private get marketLessonId(): string {
    return this.activatedRoute.snapshot.params.marketLessonId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private marketLessonsService: MarketLessonsService,
    private tippingModalService: TippingModalService,
    private purchaseForSelfDialogService: PurchaseForSelfDialogService,
    private snackBarService: SnackBarService,
    private blockchainService: BlockchainService,
    private passphraseAuthorizationDialogService: PassphraseAuthorizationDialogService
  ) {}

  ngOnInit(): void {
    this.getMarketLesson();
  }

  public openTippingDialog(): void {
    if (this.lesson) {
      this.tippingModalService
        .openDialog({ recipient: this.lesson.author })
        .pipe(filter((val) => val.confirmed && !!val.amount))
        .subscribe((val) => {
          this.passphraseAuthorizationDialogService
            .openDialog()
            .subscribe((passphrase) => {
              this.blockchainService
                .transferTokens(
                  (<IMarketLesson>this.lesson).author.id,
                  <number>val.amount,
                  passphrase
                )
                .subscribe(() => {
                  this.snackBarService.openSnackBar('Tip given', 'success');
                });
            });
        });
    }
  }

  public openPurchaseDialog() {
    this.purchaseForSelfDialogService
      .openDialog({
        type: 'course',
        id: this.marketLessonId,
        title: this.lesson?.title || '',
        price: this.lesson?.price,
      })
      .pipe(filter((val) => val.confirmed && !!val.amount))
      .subscribe((val) => {
        this.handlePurchaseSuccess(<number>val.amount);
      });
  }

  private handlePurchaseSuccess(price: number): void {
    // this.tokenBalanceService.subtract(price);
    // TODO: use blockchain acitions
    this.snackBarService.openSnackBar('Course purchased', 'success');
  }

  private getMarketLesson(): void {
    this.marketLessonsService.get(this.marketLessonId).subscribe((val) => {
      this.lesson = val;
    });
  }
}
