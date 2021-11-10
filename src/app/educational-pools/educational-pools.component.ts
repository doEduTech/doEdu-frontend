import { Component, OnInit } from '@angular/core';

import { IEducationalPool } from 'src/app/_interfaces/educational-pool.interface';
import { EducationalPoolsService } from '../_services/api/educational-pools.service';

@Component({
  selector: 'app-educational-pools',
  templateUrl: './educational-pools.component.html',
  styleUrls: ['./educational-pools.component.scss'],
})
export class EducationalPoolsComponent implements OnInit {
  public educationalPools: IEducationalPool[] = [];

  constructor(private educationalPoolsService: EducationalPoolsService) {}

  ngOnInit(): void {
    this.getEducationalPools();
  }

  private getEducationalPools(): void {
    this.educationalPoolsService
      .getAll()
      .subscribe((val) => (this.educationalPools = val));
  }
}
