import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'create-edit-figure',
  templateUrl: './create-category.dialog.html'
})
export class CreateCategoryDialog implements OnInit {

  categoryModel: any = {};

  constructor( private dialogRef: MatDialogRef<CreateCategoryDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any ) {}

  ngOnInit(): void {
  }


}