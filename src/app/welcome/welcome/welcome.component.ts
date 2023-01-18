import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product/product-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  // @Output() value:EventEmitter<any>=new EventEmitter<any>();
  constructor(private router:Router,private service:ProductServiceService) { }
  formModel={
    Email:'',
    password:''
  }
  ngOnInit(): void {
    if(sessionStorage.getItem('token')!=null){
      this.router.navigateByUrl('/productlist');
    }
  }
  Loginform(LoginForm:NgForm){
     this.service.Login(LoginForm.value).subscribe((result:any)=>{
        sessionStorage.setItem('token',result.token);
         this.router.navigateByUrl('/productlist');
     }
     );
  }
}
