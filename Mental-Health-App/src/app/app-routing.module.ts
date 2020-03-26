import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DayTrackingComponent} from "./day-tracking/day-tracking.component";
import {ReliefComponent} from "./relief/relief.component";
import {MenuComponent} from "./menu/menu.component";
import {OwnSuggestionComponent} from "./relief/own-suggestion/own-suggestion.component";


const routes: Routes = [
  {path: 'day-tracking', component: DayTrackingComponent},
  {path: 'relief', component: ReliefComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'own-suggestion', component: OwnSuggestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//
