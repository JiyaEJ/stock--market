import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = localStorage.getItem('sessionData'); // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(request);
    }

    request = request.clone({
      // headers: request.headers.set('Authorization', token)
      body: { 'Authorization': token }

    });

    return next.handle(request);
  }
}
