import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductServiceService } from '../product/product-service.service';

@Component({
  selector: 'app-user-registeration',
  templateUrl: './user-registeration.component.html',
  styleUrls: ['./user-registeration.component.css']
})
export class UserRegisterationComponent implements OnInit {

  constructor(private _productService:ProductServiceService,private formBuilder:FormBuilder) { }
  formvalue :any={};
  addEmployeeForm:FormGroup=new FormGroup({});
  ngOnInit(): void {
    this.addEmployeeForm=this.formBuilder.group({
      'EmpId':new FormControl(''),
      'FirstName':new FormControl(''),
      'LastName':new FormControl(''),
      'Password':new FormControl(''),
      'Confirm_Password':new FormControl(''),
      'Email':new FormControl(''),
      'Phone':new FormControl(''),
      'Age':new FormControl(''),
      'Gender':new FormControl(''),
    })
  }
  postformdata(){
    this._productService.registerEmployee(this.addEmployeeForm.value).subscribe((result)=>{
      console.warn(result);
    })
   }
}
