import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { ISlope } from './shared/interfaces';
import { IPost } from './shared/interfaces';
const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadSlopes () {
    return this.httpClient.get<ISlope[]>(apiURL +'/slopes');
  }

  loadPost (limit?: number) {
    return this.httpClient.get<IPost[]>(`${apiURL}/posts${limit? `?limit=${limit}`: ``}`);
  }
}
