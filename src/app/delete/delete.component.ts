import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product/product-service.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  products:any;
  ProductId:string='';
  constructor(private ActiveRoute:ActivatedRoute,private service:ProductServiceService,private route:Router) { }

  ngOnInit(): void {
    this.ActiveRoute.params.subscribe(data=>{
      this.ProductId=data.id;
  })
  if(this.ProductId){
    this.service.deleteProduct(this.ProductId).subscribe(data=>{
      console.warn('product deleted');
      this.route.navigate(['/productlist']);
    });
  }
  }
  
}
