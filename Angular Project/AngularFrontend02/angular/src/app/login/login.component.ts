import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api-service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = { email: '', password: '' };

  constructor(
    private service: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  onSubmit(data: any) {
    this.service.userLogin(data).then((res) => {
      console.log("Loggin",res)
      if (res.status) {
  
        this.router.navigate(['/dashboard']);
      } else {
     
      }
    });
  }
}
