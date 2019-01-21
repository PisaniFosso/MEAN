import { Component, OnInit } from '@angular/core';
import { ValidateServices } from '../../services/validate.service'
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
  constructor(private validateService: ValidateServices) { }

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

  //Requiered field
  if (!this.validateService.validateRegister(user)) {
    return false;
  }

  //validate email
  if (!this.validateService.validateEmail(user.email)) {
    return false;
  }

  console.log('registred');
}
