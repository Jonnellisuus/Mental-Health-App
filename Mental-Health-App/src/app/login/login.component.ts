import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  login(loggedInUser: string) {
    // localStorage.setItem('loggedIn', loggedInUser); // new
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }
}
