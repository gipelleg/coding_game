import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.interface';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { environment } from '../../environments/environment';

const USER_API = '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private selectedUserSubject = new BehaviorSubject<User | undefined>(undefined);
  selectedUser$ = this.selectedUserSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  setSelectedUser(user: User) {
    this.selectedUserSubject.next(user);
  }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.baseApi}/${USER_API}`);
  }

}
