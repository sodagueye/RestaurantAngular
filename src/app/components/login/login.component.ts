import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public form={
    email:null,
    password:null
  };
  public error=null
  constructor( private http:HttpClient){}

  onSubmit(){
   return this.http.post<any>('http://localhost:8000/api/auth/login' ,this.form)
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
