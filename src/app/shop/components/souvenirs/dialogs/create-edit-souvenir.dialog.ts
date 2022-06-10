import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CategoryService } from "../../../../services/category.service"
import { FranchiseService } from "../../../../services/franchise.service"
import { StateService } from "../../../../services/state.service"
import { TypeService } from "../../../../services/type.service"
import { SouvenirsService } from "../../../../services/souvenirs.service"


@Component({
  selector: 'create-edit-souvenir',
  templateUrl: './create-edit-souvenir.dialog.html',
  styleUrls: ['../souvenirs.component.scss']
})
export class CreateEditSouvenirsDialog implements OnInit {

  isCreate: boolean = true;

  souvenirModel: any = {};

  states: any[] = [];

  categories: any[] = [];

  franchises: any[] = [];

  types: any[] = [];

  constructor( private dialogRef: MatDialogRef<CreateEditSouvenirsDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _categoryService: CategoryService,
    private _franchiseService: FranchiseService,
    private _stateService: StateService,
    private _typeService: TypeService,
    private _souvenirsService: SouvenirsService ) {}

  ngOnInit(): void {

    if (this.data !== null) {

      this.isCreate = false;

      this.souvenirModel = {...this.data};

    } else {

      this.isCreate = true;
    }

    this.getCategories();
    this.getFranchises();
    this.getStates();
    this.getTypes();
    
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

  getTypes = () => {
    this._typeService.getAll().subscribe({
      next: ( res: any ) => {
        this.types = res.rows;
        console.log(this.types);
      },
      error: ( err: any ) => {
        Swal.fire('Erorr', 'An error has ocurred', 'error')
      }
    });
  }

  create = () => {
    this._souvenirsService.create( this.souvenirModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Souvenir created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Souvenir created successfully', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
      }
    })
  }

  update = () => {
    this._souvenirsService.update( this.souvenirModel.id_souvenir, this.souvenirModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Souvenir updated successfully', 'success');
        this.dialogRef.close('reload');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Souvenir updated successfully', 'success');
          this.dialogRef.close('reload');
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    })
  }


}