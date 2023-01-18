import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Iproduct } from './product';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "PRODUCT LIST";
  margin: number = 2;
  height: number = 50;
  page = 1;
  count = 0;
  tableSize = 4;
  tableSizesArr = [4, 6, 8, 10, 12, 30];
  showImage: boolean = true;
  private _listFilter: string = '';
  private _listSort: string = '';
  errorMessage: string = '';
  imgUrl:string= "assets/images/product-backkground.jpg"

  get listfilter(): string {
    return this._listFilter;
  }

  set listfilter(value: string) {
    this._listFilter = value;
    this.filterproduct = this.performfilter(value);
    
  }
  products: Iproduct[] = [];
  filterproduct: Iproduct[] = [];

  performfilter(filterBy: string): Iproduct[] {
    if (filterBy == '') {
      this.ngOnInit();
    }
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((products: Iproduct) =>
      products.productName.toLocaleLowerCase().includes(filterBy)
    );
  }
  toggleImage() {
    this.showImage = !this.showImage;
  }
  onRatingclick(message:string){
    this.pageTitle='PRODUCT LIST : ' + message ;
  }
  constructor(private ProductServiceService: ProductServiceService) {
   }
  ngOnInit(): void {
    this.showData();
    
  }
  showData(): void {
    
    this.ProductServiceService.getproduct().subscribe({
      next: products => {
        this.products = products;
        this.filterproduct = this.products;
        
      },
      error: err => this.errorMessage = err
    });
  }
  tabSize(event: any) {
    this.page = event;
    this.showData();
  }

  tableData(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.showData();
  }
  sortData(sort: Sort) {
    const data = this.products.slice();
    if (!sort.active || sort.direction === '') {
      this.filterproduct = data;
      return ;
    }
  this.filterproduct = data.sort((a, b) => {
    const isAsc = sort.direction === 'asc';
    switch (sort.active) {
      case 'productId':
        return compare(a.productId, b.productId, isAsc);
      case 'productName':
        return compare(a.productName, b.productName, isAsc);
      case 'productCode':
        return compare(a.productCode, b.productCode, isAsc);
      case 'releaseDate':
        return compare(a.releaseDate, b.releaseDate, isAsc);
      case 'price':
        return compare(a.price, b.price, isAsc);
      case 'starRating':
        return compare(a.starRating, b.starRating, isAsc);
      default:
        return 0;
    }
  });
}
}
 function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
