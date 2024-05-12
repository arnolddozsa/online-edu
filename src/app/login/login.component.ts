import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServerService } from '../services/server.service';
import { Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RegistrationComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formData = {
    email: '',
    password: ''
  };

  error: string = "";
  constructor(private router: Router, private service: ServerService) { }

  async login() {
    // Perform login logic here
    console.log('Login form submitted:', this.formData);
    // You can add your login logic such as calling an authentication service
    try {
      
      var res = await this.service.login(this.formData.email, this.formData.password);
      this.router.navigateByUrl("/");
    } catch (error: any) {
      this.error = error.message;
    }
    

  }
}
