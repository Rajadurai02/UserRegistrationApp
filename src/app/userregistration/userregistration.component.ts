import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { PasswordMisMatchValidator } from '../shared/password.validator';
import { InvalidUserName } from '../shared/username.validator';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent {
  constructor(private fb: FormBuilder) {
    //constructor can be used in replacement of LoadInitialData
    //this.LoadInitialData1()
  }

  get UserName(){
    return this.UserRegForm.get('userName');
  }

  get Password(){
    return this.UserRegForm.get('password');
  }

  get ConfirmPassword(){
    return this.UserRegForm.get('confirmpassword');
  }

  UserRegForm = this.fb.group({
    userName: ['',[Validators.required,InvalidUserName]],
    password: ['',[Validators.required,Validators.minLength(8)]],
    confirmpassword: ['',[Validators.required,Validators.minLength(8)]],
    UserAddress: this.fb.group({
      city: [''],
      state: [''],
      pincode: ['']
    })
  },{validator:PasswordMisMatchValidator})



  // UserRegForm = new FormGroup({

  //   userName: new FormControl(''),

  //   password: new FormControl(''),

  //   confirmpassword: new FormControl(''),

  //   UserAddress: new FormGroup({

  //     city: new FormControl(''),

  //     state: new FormControl(''),

  //     pincode: new FormControl('')

  //   })

  // });




  // LoadInitialData(){

  //   this.UserRegForm.setValue({  

  //     userName: 'testname',

  //     password: 'testpass',

  //     confirmpassword : 'testpass',

  //     UserAddress :{

  //       city: 'CBE',

  //       state: 'TN',

  //       pincode: '624003'

  //     }

  //   });

  // }




  // LoadInitialData1(){

  //   this.UserRegForm.patchValue({  

  //     userName: 'testname',

  //     password: 'testpass',

  //     confirmpassword : 'testpass',

  //   });

  // }
}
