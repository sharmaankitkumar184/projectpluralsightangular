import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome/welcome.component'
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ProductModule } from './products/product.module';
import { APIKEYSInterceptor } from './api-keys.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    NoPageComponent,
    UserRegisterationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: WelcomeComponent
    },
    {
        path: 'UserRegister',
        component: UserRegisterationComponent
    },
    {
        path: '**',
        component: NoPageComponent
    }
], {
    initialNavigation: 'enabled'
}),
ProductModule,
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS , useClass: APIKEYSInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
