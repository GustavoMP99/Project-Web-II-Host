import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ShopRoutingModule } from './shop-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MangasComponent } from './components/mangas/mangas.component';
import { FiguresComponent } from './components/figures/figures.component';

// Angular material modules
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Dialogs
import { CreateEditFigureDialog } from "./components/figures/dialogs/create-edit-figure.dialog"
import { CreateEditMangasDialog } from './components/mangas/dialogs/create-edit-mangas.dialog';
import { CreateCategoryDialog } from "../shared/dialogs/category/create-category.dialog"
import { CreateFranchiseDialog } from "../shared/dialogs/franchise/create-franchise.dialog"
import { CreateStateDialog } from "../shared/dialogs/state/create-state.dialog"
import { SouvenirsComponent } from "./components/souvenirs/souvenirs.component"
import { CreateEditSouvenirsDialog } from "./components/souvenirs/dialogs/create-edit-souvenir.dialog"
import { CreateTypeDialog } from "../shared/dialogs/type/create-type.dialog"



@NgModule({
  declarations: [
    LayoutComponent,
    FiguresComponent,
    CreateEditFigureDialog,
    CreateCategoryDialog,
    MangasComponent,
    CreateFranchiseDialog,
    CreateStateDialog,
    SouvenirsComponent,
    CreateEditSouvenirsDialog,
    CreateTypeDialog,
    CreateEditMangasDialog
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShopRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  exports: [
    LayoutComponent,
    FiguresComponent,
    CreateEditFigureDialog,
    CreateCategoryDialog,
    CreateFranchiseDialog,
    CreateStateDialog,
    SouvenirsComponent,
    CreateEditSouvenirsDialog,
    CreateTypeDialog
  ]
})
export class ShopModule { }
