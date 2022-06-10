import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss']
})
export class DialogsComponent implements OnInit {
  id_card: String = '';
  name: String = '';
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(@Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.id_card="";
    this.name="";
  }

}
