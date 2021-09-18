import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActiveIncidentsComponent } from './support_panel/incident_reports/active/active.component';

const routes: Routes = [
  {
    path: 'incidents',
    loadChildren: () => import('./support_panel/incident_reports/incidents.module').then(m => m.IncidentsModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./support_panel/users/users.module').then(m => m.UsersModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
