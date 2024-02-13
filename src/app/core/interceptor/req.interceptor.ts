import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReqInterceptor implements HttpInterceptor {
  constructor() { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    let user = "SB27342"
    const headers = new HttpHeaders({
      // soeid : user
    })

    const cloneReq = request.clone({
      headers,
      // setParams: {
      //   soeid: user,
      // }
    })
    return next.handle(cloneReq);
  }
}
