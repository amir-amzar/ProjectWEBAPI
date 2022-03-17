import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CourtService } from 'src/app/court.service';
import { AdminModel } from '../admin.model';


@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})

export class AdminlistComponent implements OnInit {

  title='ADMIN TABLE';
  formValue!: FormGroup;
  AdminModelObj : AdminModel = new AdminModel();
  admin!: any;

  constructor(private service: CourtService, private formbuilber: FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formbuilber.group({
      email : [''],
      password : ['']
    })
    this.getAllAd();
  }


  getAllAd(){
    this.service.getAdmin().subscribe(res=>{
      this.admin = res;
    })
  }

  delAdmin(admin: any){
    this.service.deleteMin(admin.id).subscribe(res=>{
      alert("Admin was deleted");
      this.getAllAd();
    })
  }

  onEdit(admin: any){
    this.AdminModelObj.id = admin.id;
    this.formValue.controls['email'].setValue(admin.email);
    this.formValue.controls['password'].setValue(admin.password)
  }

  updateAdminDetails(){
    this.AdminModelObj.email = this.formValue.value.email;
    this.AdminModelObj.password = this.formValue.value.password;

    this.service.updateMin(this.AdminModelObj, this.AdminModelObj.id).subscribe(res=>{

      alert("admin data successfully updated");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      alert("something wrong")
    })
  }
}
