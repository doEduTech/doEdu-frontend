import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { filter } from 'rxjs/operators';

import { PurchaseDialogService } from '@services/shared/purchase-dialog.service';
import { ICourse } from '@interfaces/course.interface';
import { CoursesService } from '@services/api/courses.service';
import { GroupLockedPrizeService } from '@services/shared/group-locked-prize-dialog.service';
import { PersonalLockedPrizeService } from '@services/shared/personal-locked-prize-dialog.service';
import { TippingModalService } from '@services/shared/tipping-dialog.service';
import { TokenBalanceService } from '@services/token-balance.service';
import { SnackBarService } from '@services/shared/snack-bar.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  public course: ICourse | undefined;

  private get courseId(): string {
    return this.activatedRoute.snapshot.params.courseId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private tippingModalService: TippingModalService,
    private groupLockedPrizeService: GroupLockedPrizeService,
    private personalLockedPrizeService: PersonalLockedPrizeService,
    private purchaseDialogService: PurchaseDialogService,
    private tokenBalanceService: TokenBalanceService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  public openTippingDialog(): void {
    const recipient = this.course?.author || '';
    this.tippingModalService
      .openDialog({ recipient })
      .pipe(filter((val) => val.confirmed && !!val.amount))
      .subscribe((val) => {
        this.tokenBalanceService.subtract(<number>val.amount);
        this.snackBarService.openSnackBar('Tip given', 'success');
      });
  }

  public openPesonalLockedPrizeDialog() {
    this.personalLockedPrizeService
      .openDialog({
        type: 'course',
        id: this.courseId,
        title: this.course?.title || '',
      })
      .pipe(filter((val) => val.confirmed && !!val.amount))
      .subscribe((val) => {
        this.tokenBalanceService.subtract(<number>val.amount);
        this.snackBarService.openSnackBar('Personal prize locked', 'success');
      });
  }

  public openGroupLockedPrizeDialog() {
    this.groupLockedPrizeService
      .openDialog({
        type: 'course',
        id: this.courseId,
        title: this.course?.title || '',
      })
      .pipe(filter((val) => val.confirmed && !!val.amount))
      .subscribe((val) => {
        this.tokenBalanceService.subtract(<number>val.amount);
        this.snackBarService.openSnackBar('Group prize locked', 'success');
      });
  }

  public openPurchaseDialog() {
    this.purchaseDialogService
      .openDialog({
        type: 'course',
        id: this.courseId,
        title: this.course?.title || '',
        price: this.course?.price,
      })
      .pipe(filter((val) => val.confirmed && !!val.amount))
      .subscribe((val) => {
        this.tokenBalanceService.subtract(<number>val.amount);
        this.snackBarService.openSnackBar('Course purchased', 'success');
      });
  }

  private getCourse(): void {
    this.coursesService
      .getOne(this.courseId)
      .subscribe((val) => (this.course = val));
  }
}
