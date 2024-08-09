import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-observables-demo',
  standalone: true,
  imports: [],
  templateUrl: './observables-demo.component.html',
  styleUrl: './observables-demo.component.scss'
})
export class ObservablesDemoComponent {

  // An Observable is stream  / collection of values over time
  // Cant see the values until and unless it is subscribed / consumed by the subscriber
  
  myObs$ = new Observable( (observer) => {
    // can push the data
    observer.next("Observables demo")
    observer.next("Observable demo1")
    observer.next("Observable demo2") 
    // can throw the error
    observer.error("caught the error")
    // can complete
    observer.complete()
    // // can unsubscribe
    observer.unsubscribe();
  })
 
}
