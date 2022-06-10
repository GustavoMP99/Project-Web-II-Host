import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';

  dataSource = new MatTableDataSource();

  constructor(private _loginService: LoginService) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }
  tryLogin = () => {
    var user = {
      email: this.username,
      password: this.password,
    };
    //console.log(user);
    this._loginService.login(user).subscribe({
      next: (res: any) => {
        console.log(res)
        var info={
          email: res.data.email,
          username: res.data.username,
          token: res.token,
          role: res.data.role
        }
        //console.log(info)
        sessionStorage.setItem('actualUser', JSON.stringify(info));
        Swal.fire("Done", "Loged!", "success").then(() => {
          location.href = "/shop";
        });        
      },
      error: (err) => {
        console.log(err)
        Swal.fire("Error", "Cant login!", "error").then(() => {
          location.reload();
        });     
        
      },
    });
  };
}
