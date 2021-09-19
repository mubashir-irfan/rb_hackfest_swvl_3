
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INCIDENT_SEVERITY, INCIDENT_TYPE } from '../form/form.component';




@Component({
  selector: 'swvl-panic-form',
  templateUrl: './panic-form.component.html',
  styleUrls: ['../form/form.component.scss']
})
export class PanicFormComponent implements OnInit {

  public incidentForm: FormGroup;
  public incidentTypeOptions = INCIDENT_TYPE.filter(x => x.severity !== INCIDENT_SEVERITY.MILD);

  constructor(private fb: FormBuilder) { 
    
    this.incidentForm = this.fb.group({
      incidentType: ['', Validators.required],
      fileList: [null],
      description: [],
      perpetratorSeatNum: [1, Validators.required],
      name: [''],
      perpetratorInfoFile: []
    })
  }

  ngOnInit(): void {
  }

}
