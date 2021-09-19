import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IIncident, IncidentsService, mockIncidents } from '../incidents.service'

@Component({
  selector: 'swvl-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.scss']
})
export class ActiveIncidentsComponent implements OnInit {
  public mockIncidents = mockIncidents;
  public incidentsData: IIncident[];

  constructor(
    private router: Router,
    private incidents: IncidentsService,
    ) {
    this.incidentsData = mockIncidents;
  }

  ngOnInit(): void {
    this.incidents.getAllIncidents().subscribe(res => this.incidentsData = res);
  }

  public navigateToDetails(id: number | string) {
    this.router.navigateByUrl(`/incidents/${id}`);
  }
}
