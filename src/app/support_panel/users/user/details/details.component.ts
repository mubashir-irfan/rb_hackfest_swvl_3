import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser, UsersService } from '../../users.service';

@Component({
  selector: 'swvl-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  public id!: number;
  public user!: IUser;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getUserById(this.id).subscribe(res => this.user = res as IUser)
  }

}
