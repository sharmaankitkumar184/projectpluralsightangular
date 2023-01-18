import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductServiceService } from 'src/app/product/product-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  value:any=false;
  username:string='';
  constructor(private route :Router,private userData:ProductServiceService) { 
   
  }

  ngOnInit(): void {
   
  }
  loggedin(){
    return sessionStorage.getItem('token');
  }
  ngAfterViewInit() {
    this.getUsername();
 }
  getUsername() {
    this.userData.getUsername().then((username:string) => {
       this.username = username;
       console.log("Username is: " + this.username);
    });
 }
  Logoutform(){
    
    sessionStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }
  
}
