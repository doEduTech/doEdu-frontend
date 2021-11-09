import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { ISnackBarData } from 'src/app/_interfaces/snack-bar.interface';

@Component({
  selector: 'app-snack-bar',
  templateUrl: 'snack-bar.component.html',
  styleUrls: ['snack-bar.component.scss'],
})
export class SnackBarComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ISnackBarData) {}
}
