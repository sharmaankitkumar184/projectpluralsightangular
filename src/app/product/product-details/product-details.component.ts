import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Iproduct } from '../product-list/product';
import { ProductServiceService } from '../product-service.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
pagetitle:string='Details';
products:any;
ProductId:string='';
  constructor(private route:Router,private activerouter:ActivatedRoute, private _productService:ProductServiceService) { }

  ngOnInit(): void {
    this.activerouter.params.subscribe(data=>{
      this.ProductId=data.id;
    })
    //this.pagetitle+=`:${ProductId}`;
    this._productService.getproductById(this.ProductId).subscribe({next:products=>{
      this.products=products;
    
    }});
   
  }
  onBack():void{
    this.route.navigate(['/productlist']);
  }
  onEdit():void{
    this.route.navigate(['/productlist']);
  }
}
