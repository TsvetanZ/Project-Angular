import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  user: IUser | null = {username: 'John'} as any; //null;

  get isloggedIn() {
    return this.user !== null;
  }

  constructor() { }
}
