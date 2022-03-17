import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/booking.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookingModel } from '../booking.model';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {


  title='BOOKING TABLE';
  formValue!: FormGroup;
  BookingModelObj : BookingModel = new BookingModel();
  booking!: any;

  constructor(private service: BookingService, private formbuilber: FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formbuilber.group({
      name : [''],
      date : [''],
      time : [''],
      reason : ['']
    })
    this.getAllBooking();
  }


  getAllBooking(){
    this.service.getBooking().subscribe(res=>{
      this.booking = res;
    })
  }

  delBooking(book: any){
    this.service.deleteBooking(book.id).subscribe(res=>{
      alert("Booking was deleted");
      this.getAllBooking();
    })
  }
}


