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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ReliefOutComponent } from './relief/relief-out/relief-out.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {environment} from "../environments/environment";
import {AuthService} from "./services/auth.service";
import {AngularFireModule} from "@angular/fire";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {AngularFirestoreModule} from "@angular/fire/firestore";
import { SettingsComponent } from './settings/settings.component';
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AnxietyComponent } from './anxiety/anxiety.component';
import { AnxietyInfoComponent } from './anxiety-info/anxiety-info.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { CrisisComponent } from './crisis/crisis.component';
import { PhonenumberListComponent } from './crisis/phonenumber-list/phonenumber-list.component';
import { PhonenumberComponent } from './crisis/phonenumber/phonenumber.component';

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
    ReliefOutComponent,
    PageNotFoundComponent,
    LoginComponent,
    SettingsComponent,
    SignupComponent,
    HomeComponent,
    AnxietyComponent,
    AnxietyInfoComponent,
    CrisisComponent,
    PhonenumberListComponent,
    PhonenumberComponent,
    PhonenumberComponent,
    PhonenumberListComponent
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
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    /*
    Run the following command in Angular project in order to use FireBase authentication:
    npm install @angular/fire firebase --save
     */
    MatOptionModule,
    MatSelectModule,
    MatSelectModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
