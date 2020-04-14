import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loginIndex: string; // new
  constructor(public authService: AuthService, public router: Router) { }

  title = 'Mental-Health-App';

  ngOnInit(): void {
    this.loginIndex = localStorage.getItem('loggedIn'); // new
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
    //localStorage.clear();
    //window.location.reload();
    //this.logoutUser();
    //this.refreshPage();
  }

  /*

  logoutUser(){
    localStorage.clear();
  }


  refreshPage(){
    window.location.reload();
  }

   */
}


