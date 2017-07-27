import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private http: Http, private router: Router) { }

  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }
}
