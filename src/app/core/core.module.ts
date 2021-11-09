import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideMenuComponent } from './side-menu/side-menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    UserMenuComponent,
  ],
  declarations: [
    SideMenuComponent,
    HeaderComponent,
    FooterComponent,
    UserMenuComponent,
  ],
  providers: [],
})
export class CoreModule {}
