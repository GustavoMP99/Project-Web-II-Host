import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MangaService } from 'src/app/services/manga.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateCategoryDialog } from 'src/app/shared/dialogs/category/create-category.dialog';
import { CreateFranchiseDialog } from 'src/app/shared/dialogs/franchise/create-franchise.dialog';
import { CreateStateDialog } from 'src/app/shared/dialogs/state/create-state.dialog';
import { CreateEditMangasDialog } from './dialogs/create-edit-mangas.dialog'; 
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {

  
  displayedColumns = [
    'id',
    'name',
    'description',
    'price',
    'id_category',
    'state',
    'image_url',
    'id_franchise',
    'actions',
  ];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private _mangaService: MangaService,private _dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getAllList();
  }

  openCreateDialog(): void {
    const dialogRef = this._dialog.open( CreateEditMangasDialog, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe( result => {
      if (result === 'reload') {
        this.getAllList();
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
    // ----------------------------------------------------------------------------------------------

    getAllList = () => {
      this._mangaService.getAllList().subscribe({
        next: (res: any) => {
          this.dataSource.data = res.rows;
        },
        error: (err) => {
          console.log(err);
        },
      });
    };

    delete = (id: number) => {
      this._mangaService.delete(id).subscribe({
        next: (res: any) => {
          Swal.fire('Delete', 'Figure deleted', 'success')
          this.getAllList();
        },
        error: ( err: any ) => {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
      })
    }

    openEditDialog( manga: any ): void {

      const data = {
        id_manga: manga.id_manga,
        name: manga.name,
        description: manga.description,
        price: manga.price,
        image_url: manga.image_url,
        id_category: manga.category.id_category,
        id_state: manga.state.id_state,
        id_franchise: manga.franchise.id_franchise
        
      }
  
      const dialogRef = this._dialog.open( CreateEditMangasDialog, {
        width: '600px',
        data
      });
  
      dialogRef.afterClosed().subscribe( result => {
        if (result === 'reload') {
          this.getAllList();
        }
      });
    }
}
