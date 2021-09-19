import { ActivatedRoute } from '@angular/router';
import { IncidentReportService } from './../incident-report.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

export interface IINCIDENTYPE {
  id: number;
  value: string;
  label: string;
  severity: INCIDENT_SEVERITY;
}

export enum INCIDENT_SEVERITY {
  SEVERE = 'severe',
  MILD = 'mild',
  TRIVIAL = 'trivial',
}

export const INCIDENT_TYPE: IINCIDENTYPE[] = [
  {
    id: 0,
    value: 'harrased',
    label: 'I am being harrassed',
    severity: INCIDENT_SEVERITY.SEVERE,
  },
  {
    id: 1,
    value: 'over_speeding',
    label: 'Over speeding or Rash Driving',
    severity: INCIDENT_SEVERITY.SEVERE,
  },
  {
    id: 2,
    value: 'robbed',
    label: `I'm being robbed`,
    severity: INCIDENT_SEVERITY.SEVERE,
  },
  {
    id: 3,
    label: 'Driver is late',
    value: 'driver',
    severity: INCIDENT_SEVERITY.MILD,
  },
  {
    id: 4,
    label: 'Others',
    value: 'others',
    severity: INCIDENT_SEVERITY.TRIVIAL,
  },
];

@Component({
  selector: 'swvl-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public incidentForm: FormGroup;
  public incidentTypeOptions = INCIDENT_TYPE;

  constructor(private fb: FormBuilder, private incidentReportService: IncidentReportService, private activatedRoute: ActivatedRoute) {


    this.incidentForm = this.fb.group({
      incidentType: ['', Validators.required],
      fileList: [null],
      description: [],
      perpetratorSeatNum: [1, Validators.required],
      name: [''],
      time: [null],
      date: [null],
      perpetratorInfoFile: [],
    });
  }

  ngOnInit(): void {}

  public onSave(): void {
    const date = moment(this.incidentForm.value.date).format('DD-MM-YYYY')
    const time = moment(this.incidentForm.value.time).format('HH:mm')
    const formattedData = `${date} ${time}`;
    console.log(this.incidentForm)
    this.incidentReportService.createIncident({
      reportingUser: this.activatedRoute.snapshot.paramMap.get('userId'),
      subjectUser: 'sCss6sSAD92Lasdddd',
      'users': ["c9asd90a8sd","asda9s0d8asd"]
    }).subscribe((data) => {
      console.log(data)
    })
  }
}
