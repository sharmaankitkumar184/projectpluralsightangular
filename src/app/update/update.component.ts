import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product/product-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  products:any;
  ProductId:string='';
  dataloaded:boolean=false;
  editProductForm:FormGroup=new FormGroup({});
  constructor(private route:Router,private activerouter:ActivatedRoute, private _productService:ProductServiceService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.dataloaded=false;
    this.activerouter.params.subscribe(data=>{
      this.ProductId=data.id;
  })
  if(this.ProductId!==''){
    this._productService.getproductById(this.ProductId).toPromise()
    .then(data=>{
      this.products=data;
      //Object.assign(this.products,data);

    this.editProductForm=this.formBuilder.group({
      'productId':new FormControl(this.products.productId),
      'productName':new FormControl(this.products.productName),
      'productCode':new FormControl(this.products.productCode),
      'releaseDate':new FormControl(this.products.releaseDate),
      'price':new FormControl(this.products.price),
      'starRating':new FormControl(this.products.starRating),
      'ImgUrl':new FormControl(this.products.ImgUrl)
    })
    this.dataloaded=true;
  })
}
}
updateformdata(){
this._productService.updateproduct(this.ProductId,this.editProductForm.value).subscribe((data)=>{
   console.log('updated successfully');
});
}
}
