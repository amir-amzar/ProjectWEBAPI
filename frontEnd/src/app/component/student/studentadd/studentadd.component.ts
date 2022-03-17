import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { StudentService } from 'src/app/student.service';
import { StudentModel } from '../student.model';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrls: ['./studentadd.component.css']
})
export class StudentaddComponent implements OnInit {

  formValue!: FormGroup;
  StudentModelObj : StudentModel = new StudentModel();

  constructor(private service: StudentService, private formbuilber: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      email : [''],
      password : ['']
    })
  }
  postStudentDetails(){
    this.StudentModelObj.email = this.formValue.value.email;
    this.StudentModelObj.password = this.formValue.value.password;

    this.service.createStudent(this.StudentModelObj).subscribe(res=>{
      console.log(res);
      alert("Student data successfully added")
      this.formValue.reset();
    },
    err=>{
      alert("something wrong")
    })
  }

}
