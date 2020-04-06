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
  public loadingLoader = false;
  constructor(private fb: FormBuilder, private authService:AuthenticationService, private router: Router) {}

  ngOnInit() {
      
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  })
  }

  formSubmit(){
		this.loadingLoader = true;
    let frmData=this.userForm.value;
    // this.router.navigate(['./dashboard']);
		this.authService.login(frmData)
	    .subscribe(
	      response => {
          this.responseData = response;
          alert('response in login comp==>'+ this.responseData);
	          this.router.navigate(['./dashboard']);
	      }
	    )
	}

  /*formSubmit(){
		// this.loadingLoader = true;
    let frmData=this.loginForm.value;
    alert('formData::'+frmData);
    if (this.loginForm.invalid) {
      return;
  }
		this.authService.login(frmData)
	    .subscribe(
	      response => {
          alert(response);
          this.responseData = response;
          alert(this.responseData);
	          this.router.navigate(['./dashboard']);
	      }
	    )  
	}*/

}
