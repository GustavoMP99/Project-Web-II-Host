import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MangaService } from 'src/app/services/manga.service';


@Component({
  selector: 'app-crud-manga',
  templateUrl: './crud-manga.component.html',
  styleUrls: ['./crud-manga.component.scss'],
})
export class CrudMangaComponent implements OnInit {
  displayedColumns = [
    'id',
    'name',
    'description',
    'price',
    'id_category',
    'stock',
    'image_url',
    'id_franchise',
    'actions',
  ];

  dataSource = new MatTableDataSource();

  constructor(private _mangaService: MangaService) {}

  ngOnInit(): void {}
  // ----------------------------------------------------------------------------------------------

  getAllList = () => {
    this._mangaService.getAllList().subscribe({
      next: (res: any) => {
        this.dataSource.data = res.rows;
      },
      error: (err) => {
        console.log(err);
      },
    });
  };
}
