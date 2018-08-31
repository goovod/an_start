import { Injectable, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class UserService {
  private usersUrl = 'api/users';

  @Output() changeEvent: EventEmitter<User> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<User> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {
  }
  getUsers (): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl, httpOptions);
  }
  add(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions).pipe(
      tap(data => {
        this.changeEvent.emit(data);
      })
    );
  }
  delete(user: User): Observable<User> {
    return this.http.delete<User>(`${this.usersUrl}/${user.id}`, httpOptions).pipe(
      tap(data => {
        this.deleteEvent.emit(data);
      })
    );
  }
}


