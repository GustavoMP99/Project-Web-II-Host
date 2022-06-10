import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private _loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.username="";
    this.password="";
  }
  tryLogin=()=>{
    var user = {
      username: this.username,
      password: this.password,
    };
    this._loginService.login(user).subscribe({
      error: (err) => {
        if (err.status != 201) {
          alert("Loged!");
          console.log(err);
        }
        else{
          alert("Not loged!");
          //Swal.fire("Done", "Customer created!", "success").then(() => {
          //  location.reload()
          //});
        }
      },
    });
  }
}
