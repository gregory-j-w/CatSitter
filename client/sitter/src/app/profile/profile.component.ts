import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

import { AppComponent } from '../app.component'

class User{
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password_digest: string;
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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  // stuff that goes onto the profile.component.html

  users: User[] = [];
  updateUser: User = new User();
  showUserPatchForm: boolean = false;

  pets: Pet[] = [];
  updatePet: Pet = new Pet();
  showPetPatchForm: boolean = false;

  constructor(private http: Http, private router: Router) { }

  patchUser(){
    this.showUserPatchForm = true
    this.http.patch('http://localhost:9393/users/' + this.updateUser.id, this.updateUser).subscribe(response =>
    this.users = response.json()
  )
}
}
