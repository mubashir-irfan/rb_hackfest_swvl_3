import { IncidentReportService } from './incident-report.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PanicFormComponent } from './panic-form/panic-form.component';
import { FormComponent } from './form/form.component';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

const routes: Routes = [
  { path: ':userId', component: FormComponent },
  { path: 'panic-form/:userId', component: PanicFormComponent },
];

@NgModule({
  declarations: [PanicFormComponent, FormComponent],
  providers: [IncidentReportService],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule,
    NzInputModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTimePickerModule
  ],
})
export class ReportIncidentModule {}
