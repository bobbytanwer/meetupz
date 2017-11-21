import { MeetupComponent } from './../meetup/meetup.component';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Meetup } from '../models/meetup';


@Injectable()
export class MeetupsService {

 meetups: Observable<Meetup>;
 // Need to find out why this is highlighted in read
 // meetups: Observable<Meetup>;
  constructor(private http: HttpClient) {
    this.meetups = this.http.get('http://localhost:3000/api/meetups');
   }

  getMeetups() {
    return this.meetups;
       }

 }

