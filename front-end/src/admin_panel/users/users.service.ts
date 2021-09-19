import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

enum UserRoles {
  DRIVER = 'driver',
  PASSENGER = 'Passenger',
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  redFlags: IRedFlag[];
  role: UserRoles;
};

export enum RedFlagTypes {
  SAFETY = 'Safety',
  CONVENIENCE = 'Convenience',
}

export interface IRedFlag {
  id: number;
  type: string;
}

const mockUsersData: IUser[] = [
  {
    id: 1,
    name: 'Leo',
    phone: '334455',
    redFlags: [
      {
        id:1,
        type: RedFlagTypes.SAFETY,
      },
      {
        id:2,
        type: RedFlagTypes.SAFETY,
      },
    ],
    role: UserRoles.DRIVER,
  },
  {
    id: 2,
    name: 'Chan',
    phone: '2247355',
    redFlags: [
      {
        id:1,
        type: RedFlagTypes.CONVENIENCE,
      },
    ],
    role: UserRoles.PASSENGER,
  },
  {
    id: 13,
    name: 'Leo',
    phone: '334455',
    redFlags: [],
    role: UserRoles.PASSENGER,
  }
]

@Injectable()
export class UsersService {
  constructor() { }

  public getAllUsers() {
    return of(mockUsersData);
  }

  public getUserById(id: number) {
    return of(mockUsersData.find(user => user.id == id));
  }

  public updateUserById(){}
}