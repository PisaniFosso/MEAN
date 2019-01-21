import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){
      if (user.name == undefined ||
          user.email == undefined ||
          user.phone == undefined ||
          user.password == undefined) {
          return false;
      } else {
          return true;
      }
  }
  validateEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validatePhone(phone){
       var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9])[-. ]?([0-9]{2})??[-. ]([0-9]{2})?[-. ]?([0-9]{2})?[-. ]?([0-9]{2})$/;
    if((phone.value.match(phoneno))
        {
      return true;
        }
      else
        {
        return false;
        }
  }
}
