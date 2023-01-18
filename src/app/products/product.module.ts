import { NgModule } from '@angular/core';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProductListComponent } from '../product/product-list/product-list.component';
import { RegisterComponent } from '../register/register.component';
import { ProductDetailsComponent } from '../product/product-details/product-details.component';
import { RouterModule } from '@angular/router';
import { AuthguardGuard } from '../authguard.guard';
import { SharedModule } from '../share/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteComponent } from '../delete/delete.component';
import { UpdateComponent } from '../update/update.component';
@NgModule({
  declarations: [
    ProductListComponent,
    RegisterComponent,
    ProductDetailsComponent,
    DeleteComponent,
    UpdateComponent,
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {
          path:'register',
          component:RegisterComponent,
          canActivate:[AuthguardGuard]
        },
        {
          path:'productlist',
          component:ProductListComponent,
          canActivate:[AuthguardGuard]
        },
        {
          path:'productdetails/:id',
          canActivate:[AuthguardGuard],
          component:ProductDetailsComponent,
        },
        {
          path:'productdelete/:id',
          component:DeleteComponent,
          canActivate:[AuthguardGuard]
        },
        {
          path:'productedit/:id',
          component:UpdateComponent,
          canActivate:[AuthguardGuard]
        },

      ]
    ),
    SharedModule
  ],
  providers: [
   
  ],
})

export class ProductModule { }
