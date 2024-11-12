import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  #http = inject(HttpClient)

  #baseUrl = 'https://localhost:4200/' // if backend server is configured use this

  get(url: string) {
    return this.#http.get(url)
  }

  getById(url: string, id: number){
    return this.#http.get(`${url}/${id}`)
  }


  post(url: string, payload: unknown) {
    return this.#http.post(url, payload)
  }


  delete(url: string, id: number){
   return  this.#http.post(url, id)
  }

  getJSON(path: string){
    return this.#http.get(path)
  }
}
