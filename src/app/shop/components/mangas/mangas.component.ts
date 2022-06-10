import { Component, OnInit, ViewChild, AfterViewInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MangaService } from 'src/app/services/manga.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mangas',
  templateUrl: './mangas.component.html',
  styleUrls: ['./mangas.component.scss']
})
export class MangasComponent implements OnInit {

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

  constructor(private _mangaService: MangaService) { }

  ngOnInit(): void {
  }

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
