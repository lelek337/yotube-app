import {  HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqClone = req.clone({
      url: environment.apiUrl + req.url,
      params: req.params.append('key', 'AIzaSyBG0nqHF3dFQt-6nsQuQwYdLnB6LkIoIeI'),
    });
    return next.handle(reqClone)
      .pipe(
        tap(
          (event) => {
            if (event instanceof HttpResponse)
              console.log('Server response');
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              if (err.status == 401)
                console.log('Unauthorized');
            }
          },
        ),
      );
  }
}
