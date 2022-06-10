import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditFigureDialog } from "./dialogs/create-edit-figure.dialog"
import { CreateCategoryDialog } from "../../../shared/dialogs/category/create-category.dialog"
import { CreateFranchiseDialog } from "../../../shared/dialogs/franchise/create-franchise.dialog"
import { CreateStateDialog } from "../../../shared/dialogs/state/create-state.dialog"
import { FiguresService } from "../../../services/figures.service"
import Swal from 'sweetalert2';


@Component({
  selector: 'app-figures',
  templateUrl: './figures.component.html',
  styleUrls: ['./figures.component.scss']
})
export class FiguresComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource([]);

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'category',
    'franchise', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dialog: MatDialog, private _figuresService: FiguresService) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAll();
  }

  openCreateDialog(): void {
    const dialogRef = this._dialog.open( CreateEditFigureDialog, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result === 'reload') {
        this.getAll();
      }
    });
  }

  openEditDialog( figure: any ): void {

    const data = {
      id_figure: figure.id_figure,
      name: figure.name,
      description: figure.description,
      price: figure.price,
      image_url: figure.image_url,
      id_category: figure.category.id_category,
      id_state: figure.state.id_state,
      id_franchise: figure.franchise.id_franchise
      
    }

    const dialogRef = this._dialog.open( CreateEditFigureDialog, {
      width: '600px',
      data
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result === 'reload') {
        this.getAll();
      }
    });
  }

  openCreateCategoryDialog() {
    const dialogRef = this._dialog.open( CreateCategoryDialog);
  }

  openCreateFranchiseDialog() {
    const dialogRef = this._dialog.open( CreateFranchiseDialog);
  }

  openCreateStateDialog() {
    const dialogRef = this._dialog.open( CreateStateDialog);
  }

  getAll = () => {
    this._figuresService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.rows;
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    })
  }

  delete = (id: number) => {
    this._figuresService.delete(id).subscribe({
      next: (res: any) => {
        Swal.fire('Delete', 'Figure deleted', 'success')
        this.getAll();
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    })
  }

}
