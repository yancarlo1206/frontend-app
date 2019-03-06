import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { StorageService } from "../_services/storage.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpClient } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private http: HttpClient, private storageService: StorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    console.log(`AddTokenInterceptor - ${req.url}`);

    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders:{
        Authorization : `Bearer ${this.storageService.getCurrentToken()}`
      }
    });

    return next.handle(jsonReq);
  }
}