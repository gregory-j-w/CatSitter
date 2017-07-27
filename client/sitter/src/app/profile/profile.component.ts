import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

import { AppComponent } from '../app.component'

class User{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  token: string;
}

class Pet{
  id: number;
  name: string;
  species: string;
  birthyear: number;
  photo: string;
  notes: string;
  ownerid: number;
}

class Appointment{
  id: number;
  date: string;
  time: string;
  service: string;
  notes: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // stuff that goes onto the profile.component.html

  user: User = new User();
  updateUser: User = new User();
  showUserPatchForm: boolean = false;

  pet: Pet = new Pet();
  updatePet: Pet = new Pet();
  showPetPatchForm: boolean = false;

  appointment: Appointment = new Appointment();
  updateAppointment: Appointment = new Appointment();

  constructor(private http: Http, private router: Router) {
    this.getUsers();
  }

  getUsers(){
  this.http.get('http://localhost:9393/users?token=' + window.localStorage.token).subscribe(response => {
    this.user = response.json().user
    this.pet = response.json().pet

    }, err => {
      //if permission denied
      if(err.status === 403){
        this.router.navigate(['/login'])
      } else {
        alert("ERROR");
      }
    })
   }

  patchUser(){
    this.showUserPatchForm = true
    this.http.patch('http://localhost:9393/users?token=' + window.localStorage.token + this.updateUser.id, this.updateUser).subscribe(response => {
      this.user = response.json().user
    }, err => {
      //if permission denied
      if(err.status === 403){
      this.router.navigate(['/login'])
    } else {
      alert("ERROR");
      }
    })
  }

  patchPet(){
    this.showPetPatchForm = true
    this.http.patch('http://localhost:9393/pets/' + this.updatePet.id, this.updatePet).subscribe(response => {
       this.user = response.json().pet
    }, err => {
      //if permission denied
      if(err.status === 403){
      this.router.navigate(['/login'])
    } else {
      alert("ERROR");
      }
    })
  }

  patchAppointment() {
    this.http.patch('http://localhost:9393/appointments/' + this.updateAppointment.id, this.updatePet).subscribe(response => {
       this.user = response.json()
    }, err => {
      //if permission denied
      if(err.status === 403){
      this.router.navigate(['/login'])
    } else {
      alert("ERROR");
      }
    })
  }


}
