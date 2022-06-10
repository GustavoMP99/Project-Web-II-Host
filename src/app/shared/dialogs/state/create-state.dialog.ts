import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { StateService } from "../../../services/state.service"


@Component({
  selector: 'create-franchise',
  templateUrl: './create-state.dialog.html'
})
export class CreateStateDialog implements OnInit {

  stateModel: any = {};

  constructor( private dialogRef: MatDialogRef<CreateStateDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _stateService: StateService ) {}

  ngOnInit(): void {
  }

  create = () => {
    this._stateService.create( this.stateModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'State created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'State created successfully', 'success');
          this.dialogRef.close();
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    });
  }


}