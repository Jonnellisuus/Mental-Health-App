import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DayTrackingComponent} from "./day-tracking/day-tracking.component";
import {ReliefComponent} from "./relief/relief.component";
import {MenuComponent} from "./menu/menu.component";
import {OwnSuggestionComponent} from "./relief/own-suggestion/own-suggestion.component";
import {ReliefOutComponent} from "./relief/relief-out/relief-out.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {LoginGuard} from "./guard/login.guard";
import {SettingsComponent} from "./settings/settings.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component";
import {AnxietyComponent} from "./anxiety/anxiety.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'day-tracking', component: DayTrackingComponent, canActivate: [LoginGuard]},
  {path: 'relief', component: ReliefComponent, canActivate: [LoginGuard]},
  {path: 'menu', component: MenuComponent, canActivate: [LoginGuard]},
  {path: 'own-suggestion', component: OwnSuggestionComponent, canActivate: [LoginGuard]},
  {path: 'relief-out', component: ReliefOutComponent, canActivate: [LoginGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [LoginGuard]},
  {path: 'anxiety', component: AnxietyComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', component: PageNotFoundComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
