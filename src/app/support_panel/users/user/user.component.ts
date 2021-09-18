import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, UsersService } from '../users.service';

@Component({
  selector: 'swvl-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public usersData!: IUser[];

  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(res => this.usersData = res)
  }

  public navigateToUserDetails(id: number) {
    this.router.navigateByUrl(`users/${id}`);
  }

}
