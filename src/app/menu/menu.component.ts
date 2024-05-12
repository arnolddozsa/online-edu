import { Component } from '@angular/core';
import { ServerService } from '../services/server.service';
import { User } from '../model/User';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private router: Router, private service: ServerService){

  }

  getUser(): User{
    return this.service.user;
  }

  async logout(event: Event){
    event.preventDefault();
    try {
      this.service.logout();
      this.router.navigateByUrl("/");
    } catch (error) {
      
    }
  }
}
