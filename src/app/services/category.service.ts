import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'https://fakeshop-backend.herokuapp.com';

  private endpoint = '/category';

  constructor( private _http: HttpClient ) { }

  // create = ( input: any ) => this._http.post


}
