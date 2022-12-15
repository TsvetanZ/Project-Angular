import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  user: IUser | null = null;

  get isloggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
