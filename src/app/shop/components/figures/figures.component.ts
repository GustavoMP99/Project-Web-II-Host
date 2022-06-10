import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditFigureDialog } from "./dialogs/create-edit-figure.dialog"
import { CreateCategoryDialog } from "../../../shared/dialogs/category/create-category.dialog"

const figures: any[] = [
  {
    id: 1,
    name: 'Figure 1',
    description: 'Description figure 1',
    price: 2500,
    id_state: 1,
    image_url: 'https://www.megaotaku.com/56951-medium_default/demon-slayer-kimetsu-no-yaiba-sega-prize-figurizm-tengen-uzui.jpg',
    id_category: 1,
    stock: 15,
    id_franchise: 1
  },
  {
    id: 2,
    name: 'Figure 2',
    description: 'Description figure 2',
    price: 3000,
    id_state: 2,
    image_url: 'https://www.megaotaku.com/56951-medium_default/demon-slayer-kimetsu-no-yaiba-sega-prize-figurizm-tengen-uzui.jpg',
    id_category: 2,
    stock: 12,
    id_franchise: 2
  }
];

@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss']
})
export class FiguresComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource(figures);

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'stock', 'category',
    'franchise', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dialog: MatDialog) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  openCreateDialog(): void {
    const dialogRef = this._dialog.open( CreateEditFigureDialog, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
    });
  }

  openEditDialog( figure: any ): void {
    const dialogRef = this._dialog.open( CreateEditFigureDialog, {
      width: '600px',
      data: figure
    });

    dialogRef.afterClosed().subscribe( result => {
      console.log('The dialog was closed');
    });
  }

  openCreateCategoryDialog() {
    const dialogRef = this._dialog.open( CreateCategoryDialog);
  }

}
