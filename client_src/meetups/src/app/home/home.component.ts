import { Observable } from 'rxjs/RX';
import { MeetupsService } from './../services/meetups.service';
import { Component, OnInit } from '@angular/core';
import { MeetupComponent } from './../meetup/meetup.component';
import { Meetup } from '../models/meetup';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  meetups: Meetup;
  constructor(private Service: MeetupsService) {
   }

  ngOnInit() {this.Service.getMeetups().subscribe(meetups => {
    console.log(meetups);
    this.meetups = meetups;
  });
  }

}
