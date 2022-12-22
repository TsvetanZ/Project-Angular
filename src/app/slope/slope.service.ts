import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISlope } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SlopeService {

  constructor( private http:HttpClient) { }

  getAllSlopes() {
    return this.http.get<ISlope[]>('/api/slopes');
  }

  getSlope (id: string) {
    return this.http.get<ISlope>('api/slopes/'+ id)
  }

  createSlope (name: string, text: string) { 
    return this.http.post<ISlope>('/api/slopes/', {themeName: name, postText: text} )
  }
 

  updateSlope (id: string, name: string, text: string) {
    return this.http.put<ISlope>('api/slopes/' + id, {themeName: name, postText: text} )
  }

  //createSlopePost (slopeId: string, postId: string) {
  //  return this.http.post<ISlope>('api/slopes/' + slopeId + '/post' + postId )
  //}

  deleteSlopePost (slopeId: string, postId: string) {
    return this.http.delete<ISlope>('api/slopes/' + slopeId + '/post' + postId )
  }


  //deleteSlope (id: string) {
  //  return this.http.delete<ISlope>('api/slopes/' + id )
  //}

}


