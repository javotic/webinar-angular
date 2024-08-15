import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private http = inject(HttpClient);
  private endPoint : String = "localhost:8080/api/";

  constructor() { }

  list(){
    return this.http.get('http://localhost:8080/api/getAllBooks');
  }
}
