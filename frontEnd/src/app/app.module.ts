import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourtService } from './court.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminlistComponent } from './component/admin/adminlist/adminlist.component';
import { AdminaddComponent } from './component/admin/adminadd/adminadd.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookinglistComponent } from './component/booking/bookinglist/bookinglist.component';
import { StudentlistComponent } from './component/student/studentlist/studentlist.component';
import { StudentaddComponent } from './component/student/studentadd/studentadd.component';
import { BookingService } from './booking.service';
import { StudentService } from './student.service';


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
     LoginComponent,
     SignupComponent,
     AboutComponent,
     FaqComponent,
     NavbarComponent,
     AdminlistComponent,
     AdminaddComponent,
     BookinglistComponent,
     StudentlistComponent,
     StudentaddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CourtService, BookingService, StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
