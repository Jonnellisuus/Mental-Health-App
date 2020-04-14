import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public savedThemeIndex: string;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.savedThemeIndex = localStorage.getItem('themeNbr');
  }

  createNewData() {
    console.log('uutta raporttia tekemään');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
//
