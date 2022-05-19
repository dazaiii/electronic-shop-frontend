import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  constructor(private http: HttpClient) {}

  userRole: string;

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(
      `http://localhost:3000/api/auth/login`,
      {
        username,
        password,
      },
      { withCredentials: true }
    );
  }
}
