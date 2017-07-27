import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

class Appointment{
  id: number;
  date: string;
  time: string;
  ownerid: number;
  petid: number;
  sitterid: number;
  service: string;
  notes: string;
  status: boolean;
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  appointments: Appointment[] = [];
  newAppointment: Appointment = new Appointment();
  appointment: Appointment = new Appointment();

  constructor(private http: Http, private router: Router) {
  }

  postAppointment(){
    this.http.post('http://localhost:9393/appointment?token=' + window.localStorage.token, this.newAppointment).subscribe(response =>{
        this.appointments = response.json()
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

  getAppointment(id){
    this.http.get('http://localhost:9393/appointments/' + id).subscribe(response =>
      this.appointment = response.json()
    )
  }

  
}
