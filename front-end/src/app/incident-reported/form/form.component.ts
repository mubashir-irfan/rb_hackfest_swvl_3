import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IncidentReportedService } from '../incident-reported.service';

interface IIncidentInfo {
  incidentType: string,
  description: string,
  perpetratorSeatNum: number,
  name: string,
  date: string
}

@Component({
  selector: 'incident-reported',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public incidentForm: any;
  public reportedIncident: IIncidentInfo;
  

  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private incidentReportedService: IncidentReportedService) { 
    
    this.incidentForm = this.fb.group({
      isValid: [true, Validators.required],
      description: [],
      notValid: [false, Validators.required]
    })
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    this.reportedIncident = {
      incidentType: 'Harrasement',
      description: 'Someone  harrased me',
      perpetratorSeatNum: 1,
      name: 'Ali',
      date: '19-09-2021 10:47'    
    }
  }

  ngOnInit(): void {
  }

  public onSave() {
    this.incidentReportedService.verifyIncident({}).subscribe((data) => {
      console.log(data, 'firebase')
    })
    console.log(this.incidentForm)
  }
}
