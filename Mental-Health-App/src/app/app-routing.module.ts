import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DayTrackingComponent} from "./day-tracking/day-tracking.component";
import {ReliefComponent} from "./relief/relief.component";


const routes: Routes = [
  {path: 'day-tracking', component: DayTrackingComponent},
  {path: 'relief', component: ReliefComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
