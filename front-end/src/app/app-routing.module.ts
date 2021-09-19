import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../admin_panel/admin-panel.module').then(m => m.AdminPanelModule)
  },
  {
    path: 'report-incident',
    loadChildren: () => import('./report-incident/report-incident.module').then(m => m.ReportIncidentModule)
  },
  {
    path: 'incident-verification',
    loadChildren: () => import('./incident-reported/incident-reported.module').then(m => m.IncidentReportedModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
