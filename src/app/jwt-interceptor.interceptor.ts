import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    var user = sessionStorage.getItem('actualUser');
    let req = request;
    if (user) {
      var stringUser = JSON.parse(user);

    
    if (stringUser.token) {
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${stringUser.token}`,
        },
      });
    }}
    
    return next.handle(req);
  }
}
