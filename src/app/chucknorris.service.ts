import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChucknorrisService {
  private apiUrl = 'https://api.chucknorris.io/jokes/random';
  constructor(private http:HttpClient) { }
  
  
  getRandonJoke(){
    return this.http.get(this.apiUrl);
  }
}

