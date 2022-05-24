import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from "ngx-cookie-service";
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor( private cookie: CookieService ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.cookie.get('token')
    let req = request
    if(token){
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(req)
    
  }
}
