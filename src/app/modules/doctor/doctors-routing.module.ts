import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorDetailsComponent } from './components/doctor-details/doctor-details.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';

const routes: Routes = [
  {
    path: '', component: DoctorHomeComponent
  },
  {
    path: 'doctorlist', component: DoctorListComponent
  },
  {
    path: 'doctordetails', component: DoctorDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
