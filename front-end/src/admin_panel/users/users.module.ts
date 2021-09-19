import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserDetailsComponent } from './user/details/details.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';



@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzButtonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserComponent,
      },
      {
        path: ':id',
        component: UserDetailsComponent,
    }])
  ],
  exports: [],
  declarations: [UserComponent, UserDetailsComponent],
  providers: [UsersService],
})
export class UsersModule { }
