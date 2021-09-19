import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveIncidentsComponent } from './active/active.component';
import { IncidentDetailsComponent } from './active/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: ActiveIncidentsComponent,
    children: [
    ]
  }
  ,
  {
    path: ':id',
    component: IncidentDetailsComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncidentsRoutingModule { }
