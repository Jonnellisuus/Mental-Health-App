import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

export class PasswordValidation {

  static MatchPassword(AC: AbstractControl) {
    let password = AC.get('passWord').value;
    let confirmPassword = AC.get('confirmPassword').value;
    if (password !== confirmPassword) {
      console.log('false');
      AC.get('confirmPassword').setErrors({MatchPassword: true});
    } else {
      console.log('true');
      return null;
    }
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  profileForm: FormGroup;
  password: string;
  errorMessage: string;

  constructor(private fb: FormBuilder, public authService: AuthService, private router: Router, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.profileForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')]],
      passWord: ['', [Validators.required, Validators.minLength(10)]],
      confirmPassword: ['', [Validators.required]]
    }, {
     validator: PasswordValidation.MatchPassword
    });
  }

  get email() {
    return this.profileForm.get('email');
  }

  get passWord() {
    return this.profileForm.get('passWord');
  }

  get confirmPassword() {
    return this.profileForm.get('confirmPassword');
  }

  signUp(){
    this.snackBar.open('Rekisteröityminen onnistui', 'OK', {duration: 8000});
  }
}
