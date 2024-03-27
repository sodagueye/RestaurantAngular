import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public form={
    email:null ,
    name:null,
    password:null,
    password_confirmation:null
  }
  public error = null

  constructor(private http:HttpClient){

  }
  onSubmit() {
    this.http.post('http://localhost:8000/api/auth/signup', this.form)
    .subscribe({
      next: data => console.log(data),
      error:error => this.handleError(error),
     });
    
  }

  handleError(error:any) {
    
    
    this.error = error.error.error;
       }
  ngOnInit(){

  }

}
