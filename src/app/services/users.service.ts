import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private baseUrl = 'https://fakeshop-backend.herokuapp.com';

  private endpoint = '/users';

  constructor( private _http: HttpClient ) { }


  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );


}
