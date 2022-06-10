import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CategoryService } from "../../../../services/category.service"
import { FranchiseService } from "../../../../services/franchise.service"
import { StateService } from "../../../../services/state.service"
import { MangaService } from "src/app/services/manga.service"; 


@Component({
  selector: 'create-edit-mangas',
  templateUrl: './create-edit-mangas.dialog.html',
  styleUrls: ['../mangas.component.scss']
})
export class CreateEditMangasDialog implements OnInit {

  isCreate: boolean = true;

  mangaModel: any = {};

  states: any[] = [];

  categories: any[] = [];

  franchises: any[] = [];

  constructor( private dialogRef: MatDialogRef<CreateEditMangasDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _categoryService: CategoryService,
    private _franchiseService: FranchiseService,
    private _stateService: StateService,
    private _mangaService: MangaService ) {}

  ngOnInit(): void {

    if (this.data !== null) {

      this.isCreate = false;

      this.mangaModel = {...this.data};

    } else {

      this.isCreate = true;
    }

    this.getCategories();
    this.getFranchises();
    this.getStates();
  }

  getCategories = () => {
    this._categoryService.getAll().subscribe({
      next: ( res: any ) => {
        this.categories = res.rows;
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    });
  }

  getFranchises = () => {
    this._franchiseService.getAll().subscribe({
      next: ( res: any ) => {
        this.franchises = res.rows;
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    });
  }

  getStates = () => {
    this._stateService.getAll().subscribe({
      next: ( res: any ) => {
        this.states = res.rows;
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    });
  }

  create = () => {
    this._mangaService.create( this.mangaModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Figure created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Figure created successfully', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Error', 'An error has ocurred', 'error')
        }
        
      }
    })
  }

  update = () => {
    this._mangaService.update( this.mangaModel.id_figure, this.mangaModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Figure updated successfully', 'success');
        this.dialogRef.close('reload');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Figure updated successfully', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    })
  }


}