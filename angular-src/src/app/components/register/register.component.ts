import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  phone: String;
  password: String;
  constructor() { }

  ngOnInit() {
  }
  onRegisterSubmit(){
    const user ={
      name: this.name,
      usernam: this.username,
      email: this.email,
      phone: this.phone,
      password: this.password
    }
  }

}
