import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryDialog } from "../../../shared/dialogs/category/create-category.dialog"
import { CreateFranchiseDialog } from "../../../shared/dialogs/franchise/create-franchise.dialog"
import { CreateStateDialog } from "../../../shared/dialogs/state/create-state.dialog"
import Swal from 'sweetalert2';
import { CreateEditSouvenirsDialog } from "./dialogs/create-edit-souvenir.dialog"
import { SouvenirsService } from "../../../services/souvenirs.service"
import { CreateTypeDialog } from "../../../shared/dialogs/type/create-type.dialog"


@Component({
  selector: 'app-souvenirs',
  templateUrl: './souvenirs.component.html',
  styleUrls: ['./souvenirs.component.scss']
})
export class SouvenirsComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource([]);

  displayedColumns: string[] = ['id', 'name', 'description', 'price', 'category',
    'franchise', 'state', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _dialog: MatDialog, private _souvenirService: SouvenirsService ) { }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getAll();
  }

  openCreateDialog(): void {
    const dialogRef = this._dialog.open( CreateEditSouvenirsDialog, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result === 'reload') {
        this.getAll();
      }
    });
  }

  openEditDialog( souvenir: any ): void {

    const data = {
      id_souvenir: souvenir.id_souvenir,
      name: souvenir.name,
      description: souvenir.description,
      price: souvenir.price,
      image_url: souvenir.image_url,
      id_category: souvenir.category.id_category,
      id_state: souvenir.state.id_state,
      id_franchise: souvenir.franchise.id_franchise,
      id_type: souvenir.type_souvenir.id_type
    }

    const dialogRef = this._dialog.open( CreateEditSouvenirsDialog, {
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

  openCreateTypeDialog() {
    const dialogRef = this._dialog.open( CreateTypeDialog);
  }

  getAll = () => {
    this._souvenirService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.rows;
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    })
  }

  delete = (id: number) => {
    this._souvenirService.delete(id).subscribe({
      next: (res: any) => {
        Swal.fire('Delete', 'Souvenir deleted', 'success')
        this.getAll();
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    })
  }

}
