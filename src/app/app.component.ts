import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegistrationpageComponent } from './components/registrationpage/registrationpage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomepageComponent,
    LandingpageComponent,
    MainpageComponent,
    LoginpageComponent,
    RegistrationpageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-template';
}
