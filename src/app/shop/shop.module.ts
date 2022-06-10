import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import {MatButtonModule} from '@angular/material/button';
import { FiguresComponent } from './components/figures/figures.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    LayoutComponent,
    FiguresComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatButtonModule,
    MatDividerModule
  ],
  exports: [
    LayoutComponent,
    FiguresComponent
  ]
})
export class ShopModule { }
