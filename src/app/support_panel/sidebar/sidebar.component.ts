import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swvl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navItems = [
    {
      label: 'Active Incident Reports',
      link : 'incidents'
    },
    {
      label: 'Users',
      link : 'users'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
