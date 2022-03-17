import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StudentModel } from '../student.model';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {


  title='STUDENT TABLE';
  formValue!: FormGroup;
  AdminModelObj : StudentModel = new StudentModel();
  stu!: any;

  constructor(private service: StudentService, private formbuilber: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
    email : [''],
    password : ['']
    })
    this.getAllStu();
  }
  getAllStu(){
    this.service.getStudent().subscribe(res=>{
    this.stu = res;
    })
  }
  delStudent(stu: any){
    this.service.deleteStudent(stu.id).subscribe(res=>{
    alert("Student was deleted");
    this.getAllStu();
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

    this.service.updateStudent(this.AdminModelObj, this.AdminModelObj.id).subscribe(res=>{
      alert("Student data successfully updated");
      let ref = document.getElementById('cancel');
      ref?.click();
      this.formValue.reset();
    },
    err=>{
      alert("something wrong")
    })
  }
}
