import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIncident, IncidentsService } from '../../incidents.service';

@Component({
  selector: 'swvl-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class IncidentDetailsComponent implements OnInit {

  public incident: any;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private incidents: IncidentsService,
    ) { }

  ngOnInit(): void {
    const incidentId = this.route.snapshot.params.id;
    this.incidents.getIncidentById(incidentId).subscribe(res => this.incident = [res]);
  }

  public navigateToUserProfile(id: number | string) {
    this.router.navigateByUrl(`/users/${id}`);
  }

}
