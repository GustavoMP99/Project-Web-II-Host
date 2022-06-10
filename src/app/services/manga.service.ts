import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  private baseUrl = 'https://fakeshop-backend.herokuapp.com';

  private endpoint = '/mangas';

  constructor( private _http: HttpClient ) { }

  getAllList = () => this._http.get( this.baseUrl + this.endpoint );

  update = ( id: number, input: any ) => this._http.put( this.baseUrl + this.endpoint + `/${id}`, input );

  create = ( input: any ) => this._http.post( this.baseUrl + this.endpoint, input );

  delete = ( id: number ) => this._http.delete( this.baseUrl + this.endpoint + `/${ id }` );




}
