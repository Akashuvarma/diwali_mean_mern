import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedinUser: any;
  displayStyle = 'none';
  userId: any;
  user: any = {
    first_name: '',
    last_name: '',
    addres: { add_line1: '', add_line2: '', city: '', state: '' },
    email: '',
    mobile: 0,
  };

  constructor(
    private service: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    console.log('Dashboard oninit');
    this.loggedinUser = JSON.parse(localStorage.getItem('user') as any);
  }

  openPopup() {
    this.user = JSON.parse(localStorage.getItem('user') as any);
    this.userId = this.user._id;
    this.displayStyle = 'block';
  }
  closePopup() {
    this.displayStyle = 'none';
  }
  handleUpdate(data: any) {
    this.service.updateUser(this.userId, data).subscribe((res: any) => {
      if (res.status) {
        localStorage.setItem('user', JSON.stringify(res.result));
        this.ngOnInit();
        this.closePopup();
      }
    });
  }

  handleLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }


}
