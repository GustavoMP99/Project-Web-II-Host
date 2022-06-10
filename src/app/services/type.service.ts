import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  private baseUrl = 'https://fakeshop-backend.herokuapp.com';

  private endpoint = '/type-souvenir';

  constructor( private _http: HttpClient ) { }

  getAll = () => this._http.get( this.baseUrl + this.endpoint );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );


}
