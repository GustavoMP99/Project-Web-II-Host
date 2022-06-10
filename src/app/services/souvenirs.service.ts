import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SouvenirsService {

  private baseUrl = 'https://fakeshop-backend.herokuapp.com';

  private endpoint = '/souvenirs';

  constructor( private _http: HttpClient ) { }

  getAll = () => this._http.get( this.baseUrl + this.endpoint );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

  update = ( id: number, input: any ) => this._http.put( this.baseUrl + this.endpoint + `/${id}`, input );

  delete = ( id: number ) => this._http.delete( this.baseUrl + this.endpoint + `/${id}` );
}
