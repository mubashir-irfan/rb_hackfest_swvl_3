import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';

export enum INCIDENT_TYPES {
  SAFETY = 'Safety',
  CONVENIENCE = 'Convenience'
}

export enum INCIDENT_SEVERITY {
  TRIVIAL = 'trivial',
  MILD = 'mild',
  SEVERE = 'severe',
}

export interface IIncidentComment {
  userID: number,
  userName: string;
  comment?: string;
  verification: boolean;
}

export interface IIncident {
  id: number,
  type: INCIDENT_TYPES,
  severity: INCIDENT_SEVERITY,
  date: string,
  title: string,
  reporterID: number,
  subjectID: number,
  description: string,
  tripId: number;
  membersIds: number[],
  memberComments: IIncidentComment[],
}

export const mockIncidents: IIncident[] = [
  {
    id: 1,
    type: INCIDENT_TYPES.SAFETY,
    severity: INCIDENT_SEVERITY.SEVERE,
    date: '19-09-2021',
    title: 'Speed Violations',
    reporterID: 1,
    subjectID: 9,
    description: 'Driver was violating area speed limits',
    tripId: 9,
    membersIds: [1,9, 63,65,91,92],
    memberComments: [
      {
        userID: 63,
        userName: 'Mr. XYZ',
        verification: true,
        comment: 'I back this claim. Driver was violating speed limits. He even took sharp turns in school area',
      },
      {
        userID: 65,
        userName: 'Mr. ABC',
        verification: true,
        comment: 'Completely rash driving. Need new driver',
      },
      {
        userID: 9,
        userName: 'Mr. Driver',
        verification: false,
      },
    ]
  },
  {
    id: 2,
    type: INCIDENT_TYPES.CONVENIENCE,
    severity: INCIDENT_SEVERITY.MILD,
    date: '19-09-2021',
    title: 'AC was fluctuating at times',
    reporterID: 1,
    subjectID: 9,
    description: 'AC worked on and off',
    tripId: 9,
    membersIds: [1,9, 63,65,91,92],
    memberComments: [
      {
        userID: 63,
        userName: 'Mr. XYZ',
        verification: false,
        comment: 'Didnt really feel any temperature issue so I dont think so there was any issue',
      },
      {
        userID: 65,
        userName: 'Mr. ABC',
        verification: false,
        comment: 'It felt fine',
      },
      {
        userID: 9,
        userName: 'Mr. Driver',
        verification: false,
        comment: 'It might have fluctuating for a time but I reconfigured it which fixed it'
      },
    ]
  },
  {
    id: 3,
    type: INCIDENT_TYPES.SAFETY,
    severity: INCIDENT_SEVERITY.TRIVIAL,
    date: '19-09-2021',
    title: 'Repair might be required',
    reporterID: 1,
    subjectID: 9,
    description: 'Note sure but I think the vehicle sounded a bit off when turning',
    tripId: 9,
    membersIds: [1,9, 63,65,91,92],
    memberComments: [
      {
        userID: 9,
        userName: 'Mr. Driver',
        verification: false,
        comment: 'Vehicle is in good condition',
      },
    ]
  }
]

@Injectable({providedIn: 'root'})
export class IncidentsService {
  constructor() { }

  public getAllIncidents() {
    return of(mockIncidents);
  }

  public getIncidentById(id: number) {
    const incident: IIncident | undefined = mockIncidents.find(incident => incident.id == id);
    return of(incident);
  }
}