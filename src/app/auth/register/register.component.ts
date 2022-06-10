import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

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
          alert("Customer not created!");
          console.log(err);
        }
        else{
          alert("Customer created!");
          location.href = "/shop";
          //Swal.fire("Done", "Customer created!", "success").then(() => {
          //  location.reload()
          //});
        }
      },
    });
  }
}
