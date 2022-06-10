import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: String = '';
  password: String = '';
  email: String = '';

  constructor(private _userService: UsersService) { }

  ngOnInit(): void {
  }
  postCustomer = () => {
    var user = {
      username: this.username,
      password: this.password,
      email :this.email
    };

    this._userService.create(user).subscribe({
      error: (err) => {
        if (err.status != 201) {
          Swal.fire("Error", "User not created!", "error").then(() => {
            location.reload();
          });   
          console.log(err);
        }
        else{
          Swal.fire("Done", "User Created!", "success").then(() => {
            location.href = "/";
          });   
          
          //Swal.fire("Done", "Customer created!", "success").then(() => {
          //  location.reload()
          //});
        }
      },
    });
  }
}
