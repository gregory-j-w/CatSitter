import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  h2 = 'About Us';

  constructor(private http: Http, private router: Router) { }
  // nav bar link functions
  home(){
    this.router.navigate([''])

  }
  services(){
    this.router.navigate(['/services'])

  }
  contact(){
    this.router.navigate(['/contact'])

  }
  profile(){
    this.router.navigate(['/profile'])

  }
  petRegister(){
    this.router.navigate(['/petregister'])
  }
  appointment(){
    this.router.navigate(['/appointment'])
  }
  logout(){
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }
}
