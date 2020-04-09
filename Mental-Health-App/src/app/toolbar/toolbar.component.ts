import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() MenuClick: EventEmitter<any>;
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }


  onMenuClick() {
    this.MenuClick.emit();
  }
}
