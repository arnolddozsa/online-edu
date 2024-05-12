import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import 'uikit/dist/css/uikit.min.css';
import 'uikit/dist/js/uikit.min.js';
import 'uikit/dist/js/uikit-icons.min.js';
import { RegistrationComponent } from './registration/registration.component';
import { ServerService } from './services/server.service';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, MenuComponent, CommonModule, RegistrationComponent],
  templateUrl: './app.component.html',
  viewProviders: [ServerService],
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  servic?: ServerService;
  constructor(private service: ServerService){
    this.servic = service;
  }
  title = 'OnlineEdu';
}
