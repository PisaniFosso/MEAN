import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { FlashMessagesService } from 'angular2-flash-messages';
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
  constructor(private validateService: ValidateService, private flashMessagesServices: FlashMessagesService) { }

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
    this.flashMessagesServices.show('please fill in all fields', {cssClass:'alert-danger', timeout:3000});
    return false;
  }

  //validate email
  if (!this.validateService.validateEmail(user.email)) {
    this.flashMessagesServices.show('please Enter a valid email', {cssClass:'alert-danger', timeout:3000});
    return false;
  }

  //validate phone
  if (!this.validateService.validatePhone(user.phone)) {
    this.flashMessagesServices.show('please Enter a valid phone', {cssClass:'alert-danger', timeout:3000});
    return false;
  }
}
}
