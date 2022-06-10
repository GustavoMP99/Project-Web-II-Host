import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import {MatButtonModule} from '@angular/material/button';
import { FiguresComponent } from './components/figures/figures.component';
import { MatDividerModule } from '@angular/material/divider';
import { MangasComponent } from './mangas/mangas.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    LayoutComponent,
    FiguresComponent,
    MangasComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    LayoutComponent,
    FiguresComponent
  ]
})
export class ShopModule { }
