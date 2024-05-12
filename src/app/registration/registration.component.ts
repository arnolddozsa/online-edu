import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../services/server.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent { 

  formData = {
    _id: "",
    email: '',
    password: '',
    isTeacher: false
  };

  error: string = "";

  constructor(private router: Router, private service: ServerService) { }

  async register() {
    // Perform registration logic here
    console.log('Registration form submitted:', this.formData);
    // You can add your registration logic such as calling an authentication service

    try {
      var res = await this.service.registration(this.formData);
      this.router.navigateByUrl("/login");
    } catch (error: any) {
      this.error = error.message;
      
    }
    
  }
}
