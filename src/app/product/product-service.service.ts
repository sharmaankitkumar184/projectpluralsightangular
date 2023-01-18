import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Iproduct } from './product-list/product';
import {catchError,tap} from 'rxjs/operators';
import{environment} from './../../environments/environment';
import { NgForm } from '@angular/forms';
import { Token } from '@angular/compiler';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

 //private url='api/products/product.json';
 private url='http://localhost:37158/api';
  constructor(private http :HttpClient){ } 
  
  getproduct():Observable<Iproduct[]> {
       return this.http.get<Iproduct[]>(environment.url+'/Products').pipe(
        // return this.http.get<Iproduct[]>(this.url).pipe(
        tap(data=>console.log('All',JSON.stringify(data))),
        catchError(this.handleError)
        );
    }
    getproductById(id:string):Observable<Iproduct[]> {
      return this.http.get<Iproduct[]>(environment.url+'/Products/productbyid/'+id).pipe(
        tap(data=>console.log('All',JSON.stringify(data))),
        catchError(this.handleError)
        );
    }
    postproduct(data:any) {
      return this.http.post(environment.url+'/Products/saveProduct',data);
    }
    updateproduct(id:any,data:any){
      return this.http.put(environment.url+'/Products/Update_Product/'+id,data)
    }
    deleteProduct(id:string){
      return this.http.delete(environment.url+'/Products/deleteProduct/'+id)
    }

    Login(data:NgForm){
      return this.http.post(environment.url+'/Products/validation',data);
    }
    setUsername(username:string) {
      sessionStorage.setItem('username', username);
   }
    getUsername() {
      return sessionStorage.get('username').then((value:string) => {
         return value;
      });
   }
    loginToken(){
      return sessionStorage.getItem('token');
    }
   registerEmployee(data:any){
    return this.http.post(environment.url+'/Products/Register',data);
   }



    private handleError(err: HttpErrorResponse): Observable<never> {
     
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
      
        errorMessage = `An error occurred: ${err.error.message}`;
      } 
      else if(err.status==401){
        sessionStorage.removeItem('token');
        //this.route.navigateByUrl('/login');
      }
      
      else {
       
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
      }
      
      console.error(errorMessage);
      return throwError(errorMessage);
    }
  
}
