import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() MenuClick: EventEmitter<any>;

  constructor() {
    this.MenuClick = new EventEmitter<any>();
  }

  ngOnInit(): void {

  }

  onMenuClick() {
    this.MenuClick.emit();
  }
}
