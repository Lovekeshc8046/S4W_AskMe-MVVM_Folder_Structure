import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainSectionComponent } from './layout/mainBody/main-section.component';
import { AddBusinessComponent } from './shared/components/add-business/add-business.component';
import { UserProfileComponent } from './shared/components/user-profile/user-profile.component';
import { NewsComponent } from './shared/components/news/news.component';
import { NotificationsComponent } from './shared/components/notifications/notifications.component';
import { SearchComponent } from './shared/components/search/search.component';
import { AdvertisementComponent } from './shared/components/advertisement/advertisement.component';
import { HomeComponent } from './shared/components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    AddBusinessComponent,
    UserProfileComponent,
    NewsComponent,
    NotificationsComponent,
    SearchComponent,
    AdvertisementComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
