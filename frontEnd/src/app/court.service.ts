import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourtService {

  constructor(private http:HttpClient) {}

  //admin
  createAdmin(data: any){
    return this.http.post<any>("http://localhost:3000/admin", data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  getAdmin(){
    return this.http.get<any>("http://localhost:3000/admin")
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  updateMin(data: any, id: number){
    return this.http.put<any>("http://localhost:3000/admin/"+id, data)
    .pipe(map((res: any)=>{
      return res;
    }))
  }

  deleteMin(id: number){
    return this.http.delete<any>("http://localhost:3000/admin/"+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }


}
