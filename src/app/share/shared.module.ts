import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from '../shared/star/star.component';
import { ConvertTospacesPipe } from '../product/convert-tospaces.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatSortModule} from '@angular/material/sort';
@NgModule({
  declarations: [
    StarComponent,
    ConvertTospacesPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    StarComponent,
    ConvertTospacesPipe,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    MatSortModule,
  ]
})
export class SharedModule { }
