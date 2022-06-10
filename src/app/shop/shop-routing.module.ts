import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FiguresComponent } from './components/figures/figures.component';
import { MangasComponent } from './mangas/mangas.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SouvenirsComponent } from "./components/souvenirs/souvenirs.component"

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
      },
      {
        path: 'souvenirs',
        component: SouvenirsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
