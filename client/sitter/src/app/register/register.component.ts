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
  zip: number;
  phone: number;
  token: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users: User[] = [];
  newUser: User = new User();
  user: User = new User();

  constructor(private http: Http, private router: Router) {
  }

  postUser(){
    this.http.post('http://localhost:9393/users/register', this.newUser).subscribe(response =>{
        this.users = response.json()
        window.localStorage.setItem('token', response.json().token)
      }, err =>{
        //if permission denied
        if(err.status === 403){
          this.router.navigate(['/login'])
        }else{
          alert("ERROR");
        }
      })
      this.router.navigate(['/petregister/'])
    }

  getUser(id){
    this.http.get('http://localhost:9393/users/' + id).subscribe(response =>
      this.user = response.json()
    )
  }
}
