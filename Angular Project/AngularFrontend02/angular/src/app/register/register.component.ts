import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api-service/api.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: any = FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]*$')],
      ],
      last_name: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],
      ],
      add_line1: ['', [Validators.required]],
      add_line2: [''],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      mobile: [
        '',
        [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  handleSubmit() {
    console.log('Submitted');
    console.log(this.registerForm.value);
    this.service.userSignup(this.registerForm.value).subscribe((res: any) => {
      console.log('Response', res);
      if (res.status) {
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify(res.result));
        this.router.navigate(['/dashboard']);
      } else {
    
      }
    });
  }

  handleReset() {
    console.log('Handle Reset');
    this.registerForm = {};
    this.submitted = false;
  }
}
