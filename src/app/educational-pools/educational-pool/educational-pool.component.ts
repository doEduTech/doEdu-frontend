import { Component, OnInit } from '@angular/core';

import { EducationalPoolFundsService } from '@services/educational-pools/educational-pool-funds.service';

@Component({
  selector: 'app-educational-pool',
  templateUrl: './educational-pool.component.html',
  styleUrls: ['./educational-pool.component.scss'],
})
export class EducationalPoolComponent implements OnInit {
  constructor(
    private educationalPoolFundsService: EducationalPoolFundsService
  ) {}

  ngOnInit(): void {}
}
