import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private http = inject(HttpClient)

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
