import { LoginComponent } from './login/login.component';
import { MeetupsService } from './services/meetups.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MeetupComponent } from './meetup/meetup.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddmeetupComponent } from './addmeetup/addmeetup.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    MeetupComponent,
    AboutusComponent,
    LoginComponent,
    AddmeetupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
        {
          path: 'meetup',
          component: MeetupComponent
        },
        {
          path: 'addmeetup',
          component: AddmeetupComponent
        },
       {
        path: 'aboutus',
        // redirectTo: '/aboutus',
        // pathMatch: 'full',
        component: AboutusComponent
      },
       { path: 'login', component: LoginComponent},
      // {path: '**', component: NotfoundcomponentComponent}
    ])
  ],
  providers: [ MeetupsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
