import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPanelComponent } from './admin-panel.component';
import { ActiveIncidentsComponent } from './incident_reports/active/active.component';
import { IncidentDetailsComponent } from './incident_reports/active/details/details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
  },
  {
    path: 'incidents',
    component: ActiveIncidentsComponent,
    pathMatch: 'full',
  },
  {
    path: 'incidents/:id',
    component: IncidentDetailsComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
