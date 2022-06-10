import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CategoryService } from "../../../../services/category.service"
import { FranchiseService } from "../../../../services/franchise.service"
import { StateService } from "../../../../services/state.service"
import { FiguresService } from "../../../../services/figures.service"


@Component({
  selector: 'create-edit-figure',
  templateUrl: './create-edit-figure.dialog.html',
  styleUrls: ['../figures.component.scss']
})
export class CreateEditFigureDialog implements OnInit {

  isCreate: boolean = true;

  figureModel: any = {};

  states: any[] = [];

  categories: any[] = [];

  franchises: any[] = [];

  constructor( private dialogRef: MatDialogRef<CreateEditFigureDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _categoryService: CategoryService,
    private _franchiseService: FranchiseService,
    private _stateService: StateService,
    private _figuresService: FiguresService ) {}

  ngOnInit(): void {

    if (this.data !== null) {

      this.isCreate = false;

      this.figureModel = {...this.data};

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
    this._figuresService.create( this.figureModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Figure created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Figure created successfully', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    })
  }

  update = () => {
    this._figuresService.update( this.figureModel.id_figure, this.figureModel ).subscribe({
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