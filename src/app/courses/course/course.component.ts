import { PurchaseDialogService } from './../../_services/shared/purchase-dialog.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ICourse } from 'src/app/_interfaces/course.interface';
import { CoursesService } from 'src/app/_services/api/courses.service';
import { ConfirmationDialogService } from 'src/app/_services/shared/confirmation-dialog.service';
import { GroupLockedPrizeService } from 'src/app/_services/shared/group-locked-prize-dialog.service';
import { PersonalLockedPrizeService } from 'src/app/_services/shared/personal-locked-prize-dialog.service';
import { TippingModalService } from 'src/app/_services/shared/tipping-dialog.service';

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
    private purchaseDialogService: PurchaseDialogService
  ) {}

  ngOnInit(): void {
    this.getCourse();
  }

  public openTippingDialog(): void {
    const recipient = this.course?.author || '';
    this.tippingModalService.openDialog({ recipient }).subscribe();
  }

  public openPesonalLockedPrizeDialog() {
    this.personalLockedPrizeService
      .openDialog({
        type: 'course',
        id: this.courseId,
        title: this.course?.title || '',
      })
      .subscribe();
  }

  public openGroupLockedPrizeDialog() {
    this.groupLockedPrizeService
      .openDialog({
        type: 'course',
        id: this.courseId,
        title: this.course?.title || '',
      })
      .subscribe();
  }

  public openPurchaseDialog() {
    this.purchaseDialogService
      .openDialog({
        type: 'course',
        id: this.courseId,
        title: this.course?.title || '',
        price: this.course?.price,
      })
      .subscribe();
  }

  private getCourse(): void {
    this.coursesService
      .getOne(this.courseId)
      .subscribe((val) => (this.course = val));
  }
}
