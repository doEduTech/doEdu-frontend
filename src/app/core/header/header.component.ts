import { Component } from '@angular/core';

import { TokenBalanceService } from '@services/token-balance.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
export class HeaderComponent {
  constructor(public tokenBalanceService: TokenBalanceService) {}
}
