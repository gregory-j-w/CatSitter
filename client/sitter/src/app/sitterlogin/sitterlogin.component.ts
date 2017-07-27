import { Component } from '@angular/core';
import {Http, Response } from '@angular/http'
import { Router } from '@angular/router'

@Component({
  selector: 'app-sitterlogin',
  templateUrl: './sitterlogin.component.html',
  styleUrls: ['./sitterlogin.component.css']
})
export class SitterloginComponent {
  sitter = {};
  constructor(private http: Http, private router: Router) {
  }
  sitterlogin() {
    this.http.post('http://localhost:9393/sitters/sitterlogin', this.sitter).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      this.router.navigate(['/sitter'])
    })
  }
}
