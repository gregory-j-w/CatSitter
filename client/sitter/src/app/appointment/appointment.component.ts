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



  constructor() {
 }
}
