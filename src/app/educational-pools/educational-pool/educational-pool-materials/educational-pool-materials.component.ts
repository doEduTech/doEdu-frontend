import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { filter } from 'rxjs/operators';

import { IEducationalPoolMaterial } from '@interfaces/educational-pool.interface';
import { EducationalPoolsService } from '@services/api/educational-pools.service';
import { SnackBarService } from '@services/shared/snack-bar.service';
import { ConfirmationDialogService } from '@services/shared/confirmation-dialog.service';

@Component({
  selector: 'app-educational-pool-materials',
  templateUrl: './educational-pool-materials.component.html',
  styleUrls: ['./educational-pool-materials.component.scss'],
})
export class EducationalPoolMaterialsComponent implements OnInit {
  public eduMaterials: IEducationalPoolMaterial[] = [];
  private get poolId(): string {
    return this.activatedRoute.snapshot.params.poolId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private educationalPoolsService: EducationalPoolsService,
    private snackBarService: SnackBarService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit(): void {
    this.getMaterials();
  }

  public getMaterials(): void {
    this.educationalPoolsService
      .getPoolMaterials(this.poolId)
      .subscribe((val) => (this.eduMaterials = val));
  }

  public openVoteDialog(material: IEducationalPoolMaterial): void {
    this.confirmationDialogService
      .openDialog({
        title: 'Vote on the material',
        content: `Do you think that "${material.title}" should gather funds from this educational pool?`,
      })
      .pipe(filter((val) => !!val))
      .subscribe(
        // TODO: below is a temporary vote recaunting mockup mechanism
        () => {
          const targetMaterial = this.eduMaterials.find(
            (m) => m.id === material.id
          );
          targetMaterial && targetMaterial.votes && targetMaterial.votes++;
          this.snackBarService.openSnackBar(
            'The vote has been cast',
            'success'
          );
        }
      );
  }
}
