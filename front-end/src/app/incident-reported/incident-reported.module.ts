import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';

import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path: ':id',
  component: FormComponent
}]

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzInputNumberModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule
  ],
  bootstrap: [FormComponent]
})
export class IncidentReportedModule { }
