import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  //admin
  createStudent(data: any){
    return this.http.post<any>("http://localhost:3000/student", data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  getStudent(){
    return this.http.get<any>("http://localhost:3000/student")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  updateStudent(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/student/"+id, data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  deleteStudent(id: number){
    return this.http.delete<any>("http://localhost:3000/student/"+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
}
