import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'swvl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swvl3';
  public showSidebar: boolean = false;

  constructor(private route: ActivatedRoute) {
  }
}
