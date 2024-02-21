import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantRoutingModule } from './restaurant-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RestaurantRoutingModule
  ],
  exports:
  [
    CommonModule,
    RestaurantRoutingModule
  ]
})
export class RestaurantModule { }
