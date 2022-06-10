import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { FranchiseService } from "../../../services/franchise.service"


@Component({
  selector: 'create-franchise',
  templateUrl: './create-franchise.dialog.html'
})
export class CreateFranchiseDialog implements OnInit {

  franchiseModel: any = {};

  constructor( private dialogRef: MatDialogRef<CreateFranchiseDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _franchiseService: FranchiseService ) {}

  ngOnInit(): void {
  }

  create = () => {
    this._franchiseService.create( this.franchiseModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Franchise created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Franchise created successfully', 'success');
          this.dialogRef.close();
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    });
  }


}