import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.css'],
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged:boolean;
  constructor() {
    this.isLogged = false;
  }

  ngOnInit() {
  }

  login(username, password){
    if(username.value =="test" && password.value=="test"){
      this.isLogged = true;
      console.warn("fede");
      alert("fede");
    }
  }
}
