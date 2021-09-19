import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'swvl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public data: any[];
  constructor(private router: Router) { 
    this.data = [
      {
        id: 1,
        incidentType: 'Harrasement'
      },
      {
        id: 2,
        incidentType: 'Theft'
      },
    ]
  }

  ngOnInit(): void {
  }

  public onIncidentClick(id: number) {
    this.router.navigate(["/incident-verification", id])
  }

}
