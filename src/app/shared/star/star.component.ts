import { Component, Input,EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {

  @Input() rating:number=0;
  @Input() itemName:string='';
  @Output() ratingclicked: EventEmitter<string>=new EventEmitter<string>();
  cropwidth:number=75;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropwidth=this.rating*75/5;
  }
  onClick():void{
    this.ratingclicked.emit(`The Rating ${this.rating} is clicked of Product ${this.itemName} `);
  }
}
