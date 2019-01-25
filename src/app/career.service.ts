import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Idemo } from './career-intertace';

@Injectable({
  providedIn: 'root'
})
export class CareerService {

  private url: string = "http://localhost:8089/demo";
  
  constructor(private Http: HttpClient) { }

  getcareerArray(): Observable<Idemo[]> {
    return this.Http.get<Idemo[]>(this.url);
  }
}
