import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsModule } from './modules/doctor/doctors.module';
import { AddBusinessComponent } from './shared/components/add-business/add-business.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component'
import { NewsComponent } from './shared/components/news/news.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [
  {
    path: 'doctors',
    loadChildren: () => import('./modules/doctor/doctors.module').then(m => m.DoctorsModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./modules/restaurant/restaurant.module').then(m => m.RestaurantModule)
  },
  {
    path:'addBusiness',
    component: AddBusinessComponent
  },
  {
    path:'userProfile',
    component: UserProfileComponent
  },
  {
    path:'news',
    component: NewsComponent
  },
  {
    path:'notifications',
    component: NotificationsComponent
  },
  {
    path:'',
    component: HomeComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
