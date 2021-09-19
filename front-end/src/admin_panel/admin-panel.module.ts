import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { AdminPanelComponent } from './admin-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActiveIncidentsComponent } from './incident_reports/active/active.component';
import { IncidentDetailsComponent } from './incident_reports/active/details/details.component';
import { UserDetailsComponent } from './users/user/details/details.component';
import { UserComponent } from './users/user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    AdminPanelRoutingModule,
  ],
  exports: [],
  declarations: [ ActiveIncidentsComponent, IncidentDetailsComponent, AdminPanelComponent, SidebarComponent, UserComponent, UserDetailsComponent],
  providers: [],
})
export class AdminPanelModule { }
