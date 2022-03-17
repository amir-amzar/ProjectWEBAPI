import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CourtService } from 'src/app/court.service';
import { AdminModel } from '../admin.model';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {


  formValue!: FormGroup;
  AdminModelObj : AdminModel = new AdminModel();

  constructor(private service: CourtService, private formbuilber: FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formbuilber.group({
      email : [''],
      password : ['']
    })
  }

  postAdminDetails(){
    this.AdminModelObj.email = this.formValue.value.email;
    this.AdminModelObj.password = this.formValue.value.password;

    this.service.createAdmin(this.AdminModelObj).subscribe(res=>{
      console.log(res);
      alert("admin data successfully added")
      this.formValue.reset();
    },
    err=>{
      alert("something wrong")
    })
  }
}
