import { Component, inject } from '@angular/core';
import { AppService } from '../services/app.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { filter, map, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-pipeable-ops-demo',
  standalone: true,
  imports: [],
  templateUrl: './pipeable-ops-demo.component.html',
  styleUrl: './pipeable-ops-demo.component.scss',
})
export class PipeableOpsDemoComponent {
  serv = inject(AppService)

  source$ = this.serv.getUsers().
  pipe(mergeMap((resp: any) => resp),  filter((resp: any) => resp.id > 5))


  subData = this.source$.subscribe(
    (data) => {
      console.log("data from api", data)
    }
  )
  
  ofObs$ = of(1,2,3,5,6,7);
  
  data = this.ofObs$.pipe(
      map( val => val*2),
      filter(val => val > 6)
    ).subscribe(console.log)

}
