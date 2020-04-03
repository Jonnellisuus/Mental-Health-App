import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DayTrackingComponent} from "./day-tracking/day-tracking.component";
import {ReliefComponent} from "./relief/relief.component";
import {MenuComponent} from "./menu/menu.component";
import {OwnSuggestionComponent} from "./relief/own-suggestion/own-suggestion.component";
import {ReliefOutComponent} from "./relief/relief-out/relief-out.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
  {path: 'day-tracking', component: DayTrackingComponent},
  {path: 'relief', component: ReliefComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'own-suggestion', component: OwnSuggestionComponent},
  {path: 'relief-out', component: ReliefOutComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
