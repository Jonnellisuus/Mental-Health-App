import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayTrackingComponent } from './day-tracking/day-tracking.component';
import {MatSliderModule} from '@angular/material/slider';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReliefComponent } from './relief/relief.component';
import {MatButtonModule} from "@angular/material/button";
import { MenuComponent } from './menu/menu.component';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { OwnSuggestionComponent } from './relief/own-suggestion/own-suggestion.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReliefOutComponent } from './relief/relief-out/relief-out.component';


@NgModule({
  declarations: [
    AppComponent,
    DayTrackingComponent,
    ReliefComponent,
    MenuComponent,
    ToolbarComponent,
    OwnSuggestionComponent,
    MenuComponent,
    ToolbarComponent,
    SidenavComponent,
    ReliefOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
