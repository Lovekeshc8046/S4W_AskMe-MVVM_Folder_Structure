import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';


@NgModule({
  declarations: [
    DoctorHomeComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ],
  exports:[
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
