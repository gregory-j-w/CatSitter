import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

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
  selector: 'app-petregister',
  templateUrl: './petregister.component.html',
  styleUrls: ['./petregister.component.css']
})
export class PetregisterComponent {
  pets: Pet[] = [];
  newPet: Pet = new Pet();
  pet: Pet = new Pet();

  constructor(private http: Http, private router: Router) {
  }

  postPet(){
    this.http.post('http://localhost:9393/pets?token=' + window.localStorage.token, this.newPet).subscribe(response =>{
        this.pets = response.json()
      }, err =>{
        //if permission denied
        if(err.status === 403){
          this.router.navigate(['/login'])
        }else{
          alert("ERROR");
        }
      })
      this.router.navigate(['/profile'])
    }

  getPet(id){
    this.http.get('http://localhost:9393/pets/' + id).subscribe(response =>
      this.pet = response.json()
    )
  }
}
