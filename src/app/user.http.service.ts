import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePassword } from 'src/models/changePassword.model';

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

  changePassword(changePassword: ChangePassword): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/api/users`,
      changePassword,
      { withCredentials: true }
    );
  }
}
