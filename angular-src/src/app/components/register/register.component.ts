import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
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
  constructor(private validateService: ValidateService) { }

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
    alert("Enter all the fields");
    return false;
  }

  //validate email
  if (!this.validateService.validateEmail(user.email)) {
    alert("use a valid email");
    return false;
  }

  //validate phone
  if (!this.validateService.validatePhone(user.phone)) {
    alert("use a valid phone");
    return false;
  }

  alert("good job");
}
}
