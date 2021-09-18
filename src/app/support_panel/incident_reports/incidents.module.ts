import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { ActiveIncidentsComponent } from './active/active.component';
import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentDetailsComponent } from './active/details/details.component';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
  ],
  exports: [],
  declarations: [ActiveIncidentsComponent, IncidentDetailsComponent],
  providers: [],
})
export class IncidentsModule { }
