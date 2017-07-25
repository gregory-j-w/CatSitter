import { Component, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user = {};
  constructor(private http: Http, private router: Router){
  }
  login(){
    this.http.post('http://localhost:9393/home', this.user).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      this.router.navigate(['/profile'])
    })
  }
}
