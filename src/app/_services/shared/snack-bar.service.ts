import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarComponent } from 'src/app/shared/snack-bar/snack-bar.component';
import { SnackBarType } from 'src/app/_interfaces/snack-bar.interface';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}

  openSnackBar(message: string, type: SnackBarType): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: {
        message,
        type,
      },
      duration: 2000,
    });
  }
}
