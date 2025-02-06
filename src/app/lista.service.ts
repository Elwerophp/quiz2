import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
  private apiUrl = 'https://api.chucknorris.io/jokes/categories';
  constructor(private http:HttpClient) { }
  
  
  getlista(){
    return this.http.get(this.apiUrl);
  }
}