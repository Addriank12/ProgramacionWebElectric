import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElectricService {

  constructor(private http: HttpClient) { }

  getbody(id: string){
    return this.http.get('http://localhost:8080/demo/api/persona/get/' + id);
  }

}
