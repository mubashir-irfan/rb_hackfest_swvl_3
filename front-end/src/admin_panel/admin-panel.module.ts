import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { IncidentsRoutingModule } from './incident_reports/incidents-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DemoNgZorroAntdModule } from './shared/ant.module';

@NgModule({
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    DemoNgZorroAntdModule,
  ],
  exports: [],
  declarations: [ AdminPanelComponent, SidebarComponent],
  providers: [],
})
export class AdminPanelModule { }
