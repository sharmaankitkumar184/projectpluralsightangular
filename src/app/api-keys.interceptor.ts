import { Injectable,Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduct } from './product/product-list/product';
import { map,filter } from 'rxjs/operators';
import { ProductServiceService } from './product/product-service.service';

@Injectable()
export class APIKEYSInterceptor implements HttpInterceptor {

  constructor(private inject:Injector) {}

  intercept(request: HttpRequest<Iproduct>, next: HttpHandler): Observable<HttpEvent<Iproduct>> {
   let authservice=this.inject.get(ProductServiceService);
   let tokenizedReq=request.clone({
     setHeaders:{
       Authorization:`Bearer ${authservice.loginToken()}`
     }
   })
   return next.handle(tokenizedReq);
  }
}
