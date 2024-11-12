import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  #apiService = inject(ApiService)

  #fakeServerUrl = 'https://jsonplaceholder.typicode.com'

  getUsers() {
    return this.#apiService.get(`${this.#fakeServerUrl}/users`)
  }

  getUsersById(id: number){
    return this.#apiService.get(`${this.#fakeServerUrl}/users/${id}`)
  }

  getAlbums(){
    return this.#apiService.get(`${this.#fakeServerUrl}/albums`)
  }

}
