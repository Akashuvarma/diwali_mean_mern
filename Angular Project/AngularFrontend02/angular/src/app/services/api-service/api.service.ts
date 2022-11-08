import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  private apiURL = 'http://localhost:8080';
  token: any = '';
  // httpOptions = {
  //   header: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     'authorization': 'bearer' + "mbmbhjbb"
  //   }),
  // };

  // httpOptions : Object = {
  //   headers: new HttpHeaders({
  //     'Accept': 'text/html',
  //     'Content-Type': 'text/plain; charset=utf-8'
  //   }),
  // };
  
 

  /*--------------------User Signup---------------*/
  userSignup(data: any) {
    return this.httpClient.post(`${this.apiURL}/user/userSignup`, data);
  }

  /*--------------------User Login----------------*/
  async userLogin(data: any): Promise<any> {
    this.clearData();

    const user: any = await this.httpClient
      .post(`${this.apiURL}/user/userLogin`, data)
      .toPromise();

    console.log(user);

    if (user.token && user.result) {
      localStorage.setItem('token', user.token);
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
      localStorage.setItem('user', JSON.stringify(user.result));
    }

    return user;
  }

  clearData() {
    localStorage.clear();
  }

  updateUser(_id: any, data: any) {
    let userData = { ...data, _id };
    console.log(userData)
    return this.httpClient.post(`${this.apiURL}/user/updateUser`, userData);
  }
}
