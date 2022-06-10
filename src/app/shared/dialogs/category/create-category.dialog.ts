import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { CategoryService } from "../../../services/category.service"


@Component({
  selector: 'create-category',
  templateUrl: './create-category.dialog.html'
})
export class CreateCategoryDialog implements OnInit {

  categoryModel: any = {};

  constructor( private dialogRef: MatDialogRef<CreateCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private _categoryService: CategoryService ) {}

  ngOnInit(): void {
  }

  create = () => {
    this._categoryService.create( this.categoryModel ).subscribe({
      next: ( res: any ) => {
        Swal.fire('Created', 'Category created successfully', 'success');
      },
      error: ( err: any ) => {
        if (err.status === 201) {
          Swal.fire('Created', 'Category created successfully', 'success');
          this.dialogRef.close();
        } else {
          Swal.fire('Erorr', 'An error has ocurred', 'error')
        }
        
      }
    });
  }


}