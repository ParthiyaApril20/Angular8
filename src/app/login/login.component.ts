import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  responseData: any;
  errorMessage: String;
  constructor(private fb: FormBuilder, private authService:AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  })
  }

  formSubmit(){
    let frmData=this.userForm.value;
    // this.router.navigate(['./dashboard']);
    let data = JSON.stringify(frmData);
    console.log("frmData::"+data)
    this.errorMessage = '';
		this.authService.login(data)
	    .subscribe(
	      response => {
          this.responseData = response;
          console.log('response in login comp==>'+ JSON.stringify(this.responseData));
          if(this.responseData.status == 'Success'){
            console.log('Login success');
            this.router.navigate(['./dashboard']);
          } else {
            console.log('Login Failed');
            this.errorMessage ='Invalid Username or Password';
            this.router.navigate(['']);
          } 
        },
        error =>{
          console.log('Server error');
          this.errorMessage ='Internal server error occured, please contact help desk for support!!';
          this.router.navigate(['']);
        }
	    )
	}
}
