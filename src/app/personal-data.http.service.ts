import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalData } from 'src/models/personalData.model';

@Injectable({
  providedIn: 'root',
})
export class PersonalDataService {
  constructor(private httpClient: HttpClient) {}

  getPersonalData(): Observable<PersonalData> {
    return this.httpClient.get<PersonalData>(
      'http://localhost:3000/api/personal-data',
      { withCredentials: true }
    );
  }

  updatePersonalData(body: PersonalData): Observable<PersonalData> {
    return this.httpClient.put<PersonalData>(
      'http://localhost:3000/api/personal-data',
      body,
      { withCredentials: true }
    );
  }
}
