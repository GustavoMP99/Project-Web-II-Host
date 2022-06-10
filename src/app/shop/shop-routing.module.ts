import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiguresComponent } from './components/figures/figures.component';
import { MangasComponent } from './mangas/mangas.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'figures',
        component: FiguresComponent
      },
      {
        path: 'mangas',
        component: MangasComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
