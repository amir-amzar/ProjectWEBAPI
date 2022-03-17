import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http:HttpClient) { }

  //booking
  getBooking(){
    return this.http.get<any>("http://localhost:3000/booking")
    .pipe(map((res: any)=>{
      return res;
    }))
  }
  deleteBooking(id: number){
    return this.http.delete<any>("http://localhost:3000/booking/"+id)
    .pipe(map((res: any)=>{
      return res;
    }))
  }
}
