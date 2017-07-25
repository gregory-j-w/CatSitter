import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './src/app/home/home.component';
import { UserregComponent } from './src/app/userreg/userreg.component';
import { PetregComponent } from './src/app/petreg/petreg.component';
import { AppointmentComponent } from './src/app/appointment/appointment.component';
import { ProfileComponent } from './src/app/profile/profile.component';
import { SitterloginComponent } from './src/app/sitterlogin/sitterlogin.component';
import { SitterhomeComponent } from './src/app/sitterhome/sitterhome.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'userreg',
    component: UserregComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserregComponent,
    PetregComponent,
    AppointmentComponent,
    ProfileComponent,
    SitterloginComponent,
    SitterhomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
