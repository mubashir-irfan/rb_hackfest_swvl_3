import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class IncidentReportService {

  constructor(private http: HttpClient) { }

  public createIncident(data: any): Observable<any>{

    return this.http.post('https://rb-hackathon.vercel.app/api/incident', {
    ...data
    })
  }
}
