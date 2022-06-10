import { Component, Inject, OnInit } from "@angular/core"
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'create-edit-figure',
  templateUrl: './create-edit-figure.dialog.html',
  styleUrls: ['../figures.component.scss']
})
export class CreateEditFigureDialog implements OnInit {

  isCreate: boolean = true;

  figureModel: any = {};

  states = [
    {
      id_state: 1,
      state: 'En reserva'
    },
    {
      id_state: 2,
      state: 'Agotado'
    }
  ];

  categories = [
    {
      id_category: 1,
      category: 'Anime'
    },
    {
      id_category: 2,
      category: 'Videojuego'
    }
  ];

  franchises = [
    {
      id_franchise: 1,
      franchise: 'One Piece'
    },
    {
      id_franchise: 2,
      franchise: 'Naruto'
    }
  ];

  constructor( private dialogRef: MatDialogRef<CreateEditFigureDialog>,
    @Inject(MAT_DIALOG_DATA) private data: any ) {}

  ngOnInit(): void {

    if (this.data !== null) {

      this.isCreate = false;

      this.figureModel = {...this.data};

    } else {

      this.isCreate = true;

    }

    // TODO: Llamar al servicio y obtener los states, categories y franchises
  }


}