import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public registerForm !: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/admin", this.registerForm.value).subscribe(result =>{
     alert("Success");
     this.registerForm.reset();
     this.router.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    }
    )
  }

}
