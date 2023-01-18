import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Iproduct } from '../product/product-list/product';
import { ProductServiceService } from '../product/product-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _productService:ProductServiceService,private formBuilder:FormBuilder) { }
  formvalue :any={};

  addProductForm:FormGroup=new FormGroup({});
  ngOnInit(): void {
    this.addProductForm=this.formBuilder.group({
      'productId':new FormControl(''),
      'productName':new FormControl(''),
      'productCode':new FormControl(''),
      'releaseDate':new FormControl(''),
      'price':new FormControl(''),
      'starRating':new FormControl(''),
      'ImgUrl':new FormControl(''),
    })
  }
  
postformdata(){
 this._productService.postproduct(this.addProductForm.value).subscribe((result)=>{
   console.warn(result);
 })
}
}
