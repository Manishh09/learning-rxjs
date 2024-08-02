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
  // create observable
  myObs$ = new Observable( (observer) => {
    // can push the data
    observer.next("rxjs demo")
    observer.next("observables - example")
    observer.next("abc") 
    // can throw the error
    observer.error("caught the error")
    // can complete
    observer.complete()
  })

  subscribedData = this.myObs$.subscribe(
    // data block
    (data) => {
      console.log("data from observable", data)
    },
    // error block
    (error)=> {
      console.log("data from observable", error)
    },
    // complete block
    () => {
    }
  )
}
