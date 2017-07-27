import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router'

import { AppComponent } from '../app.component'

  // class Sitter{
  //   firstname: string;
  // }
  // class Appointments{
  //   id: number;
  //   date: string;
  //   time: string;
  //   status: boolean;
  // }
  // class User{
  //   firstname: string;
  //   lastname: string;
  //   street: string;
  //   phone: string;
  // }
  // class Pet{
  //   name: string;
  //   species: string;
  //   birthyear: number;
  //   photo: string;
  //   notes: string;
  // }


@Component({
  selector: 'app-sitter',
  templateUrl: './sitter.component.html',
  styleUrls: ['./sitter.component.css']
})
export class SitterComponent {
  // sitter: Sitter[] = [];
  // appointment: Appointments[] = [];
  // users: User[] = [];
  // pet: Pet [] = [];
  //
  // updateAppointments: Appointments = new Appointments();
  //
  // constructor(private http: Http, private router: Router) {
  //   this.getAppointments();
  // }
  // getAppointments(){
  // this.http.get('http://localhost:9393/sitters?token=' + window.localStorage.token).subscribe(response => {
  //   this.sitter = response.json()
  //   }, err => {
  //     //if permission denied
  //     if(err.status === 403){
  //       this.router.navigate(['/sitterlogin'])
  //     } else {
  //       alert("ERROR");
  //     }
  //   })
  //  }
  //
  //
  //


}
