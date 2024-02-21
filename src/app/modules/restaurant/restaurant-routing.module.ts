import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RestauranDetailsComponent } from './components/restauran-details/restauran-details.component';

const routes: Routes = [
  {
    path: '', component: RestaurantListComponent
  },
  {
    path: 'Restauranlist', component: RestaurantListComponent
  },
  {
    path: 'Restaurandetails', component: RestauranDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
