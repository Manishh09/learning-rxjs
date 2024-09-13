import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-higher-orderops-demo',
  standalone: true,
  imports: [],
  templateUrl: './higher-orderops-demo.component.html',
  styleUrl: './higher-orderops-demo.component.scss'
})
export class HigherOrderopsDemoComponent {

  usersObs$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/users')

  albumsObs$ = inject(HttpClient).get('https://jsonplaceholder.typicode.com/albums')
 
  

  dataRes = forkJoin({users: this.usersObs$, albums: this.albumsObs$}).subscribe(data => {
    console.log(data)
  })
}
