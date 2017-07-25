import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  users: User[] = [];
  updateUser: User = new User();
  showUserPatchForm: boolean = false;

  constructor(private http: Http, private router: Router) { }

  patchUser(){
    this.showUserPatchForm = true
    this.http.patch('http://localhost:9393/users/' + this.updateUser.id, this.updateUser).subscribe(response =>
    this.users = response.json()
  )
}
}
