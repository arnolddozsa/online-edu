
import { Injectable } from '@angular/core';
import { User } from '../model/User';
import { Course } from '../model/Course';
import { Course_Subscription } from '../model/Course_Subscription';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  user: User = new User();
  baseURL: string = environment.apiBaseURL; // API alapcíme az environment-ből
  
  constructor() { 
    
    try {
      this.checkUser();
      
    } catch (error) {
      
    }
  }
  async fetchWrapper(endpoint: string, data: any = undefined, method: string = "POST"){
    console.log(JSON.stringify(data));
    var res = await fetch(`${this.baseURL}/${endpoint}`, {
      method: method
      , headers: {
        "Content-Type": "application/json"
      }
      , body: JSON.stringify(data)
      //, credentials: "same-origin"
       , credentials: "include"
    });
    if(res.ok){
      return await res.json();
    } else {
      var err = await res.json(); 
      throw new Error(err.message);
    }
  }
  async login(email: string, password: string){
    this.user = await this.fetchWrapper("api/auth/login", {email: email, password: password});
    return this.user;
  }

  async checkUser(){
    this.user = await this.fetchWrapper("api/auth/checkUser");
    return this.user;
  }
  async logout(){
    this.user = await this.fetchWrapper("api/auth/logout");
    return this.user;
  }
  async registration(user: User ){
    return await this.fetchWrapper("api/auth/registration", user);
  }

  async createCourse(course: Course ){
    return await this.fetchWrapper("api/course/createCourse", course);
  }

  async updateCourse(course: Course ){
    return await this.fetchWrapper("api/course/update", course);
  }

  async listCourse(){
    return await this.fetchWrapper("api/course/list", {});
  }
  async getCourse(code: string | null){
    return await this.fetchWrapper("api/course/get", {code: code});
  }

  async deleteCourse(_id:string){
    return await this.fetchWrapper("api/course/delete", {_id: _id});
  }

  async subscribe(code: string){
    return await this.fetchWrapper("api/course/subscribe", {code: code});
  }

  async getTeachersCourse(code: string | null){
    return await this.fetchWrapper("api/course/getTeachersCourse", {code: code});
  }

  async getSubscribed(code: string | null){
    return await this.fetchWrapper("api/course/getSubscribed", {code: code});
  }
  
  async progress(code: string | undefined, page:number){
    return await this.fetchWrapper("api/course/progress", {code: code, page: page});
  }

  async finishCourse(code: string | undefined){
    return await this.fetchWrapper("api/course/finish", {code: code});
  }
  
  async updateSubscription(subscription: Course_Subscription | undefined){
    return await this.fetchWrapper("api/course/subscription/update", {subscription: subscription});
  }
  
  async getForum(code: string){
    
    return await this.fetchWrapper("api/course/getForum", {code: code});
  }
  async sendForumMessage(code: string, message: string){
    
    return await this.fetchWrapper("api/course/sendForumMessage", {code: code, message: message});
  }



  

}
