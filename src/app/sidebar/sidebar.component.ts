import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swvl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public navItems = ['Active Incident Reports', 'Resolved Incident Reports']

  constructor() { }

  ngOnInit(): void {
  }

}
