import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private baseUrl = 'https://https://fakeshop-backend.herokuapp.com';

  private endpoint = '/login';

  constructor( private _http: HttpClient ) { }

  login = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

}