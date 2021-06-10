import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url:string;
  private login_URL:string;

  constructor(
    private http:HttpClient
  ) { 
    this.url = "http://localhost/moviescreen-api/user/";
    this.login_URL = "http://localhost/moviescreen-api/logar/";
  }

  getUser(id: number) {
    return this.http.get(this.url + id);
  }

  newUser(data: any) {
    return this.http.post(this.url, data);
  }

  login(data: {email_user:string, pass_user:string}) {
    return this.http.get(this.login_URL + data.email_user + '/' + data.pass_user);
  }

}
