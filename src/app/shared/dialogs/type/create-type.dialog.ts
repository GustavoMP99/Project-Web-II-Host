import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { TypeService } from "../../../services/type.service"


@Component({
  selector: 'create-type',
  templateUrl: './create-type.dialog.html'
})
export class CreateTypeDialog implements OnInit {

  typeModel: any = {};

  constructor( private dialogRef: MatDialogRef<CreateTypeDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _typeService: TypeService ) {}

  ngOnInit(): void {
  }

  create = () => {
    this._typeService.create( this.typeModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Type created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Type created successfully', 'success');
          this.dialogRef.close();
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    });
  }


}