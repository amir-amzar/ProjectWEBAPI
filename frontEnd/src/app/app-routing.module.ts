import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//normal page
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';

//component admin
import { AdminlistComponent } from './component/admin/adminlist/adminlist.component';
import { AdminaddComponent } from './component/admin/adminadd/adminadd.component';

//component student
import { StudentlistComponent } from './component/student/studentlist/studentlist.component';
import { StudentaddComponent } from './component/student/studentadd/studentadd.component';

//component booking
import { BookinglistComponent } from './component/booking/bookinglist/bookinglist.component';




const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch: 'full' },
  { path: "signup", component:SignupComponent },
  { path: "login", component:LoginComponent },
  { path: "home", component:HomeComponent },
  { path: "about", component:AboutComponent },
  { path: "faq", component:FaqComponent },
  { path: "adminlist", component:AdminlistComponent },
  { path: "studentlist", component:StudentlistComponent },
  { path: "bookinglist", component:BookinglistComponent },
  { path: "adminadd", component:AdminaddComponent },
  { path: "studentadd", component:StudentaddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
