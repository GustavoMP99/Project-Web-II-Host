import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'create-edit-mangas',
  templateUrl: './create-edit-mangas.dialog.html',
  styleUrls: ['../mangas.component.scss'],
})
export class CreateEditMangasDialog implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CreateEditMangasDialog>,
  ) {}

  ngOnInit(): void {}
}
