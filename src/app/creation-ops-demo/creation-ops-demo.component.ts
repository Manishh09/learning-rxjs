import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { from, fromEvent, of, interval, filter, map, tap, forkJoin, take } from 'rxjs';

@Component({
  selector: 'app-creation-ops-demo',
  standalone: true,
  imports: [],
  templateUrl: './creation-ops-demo.component.html',
  styleUrl: './creation-ops-demo.component.scss'
})
export class CreationOpsDemoComponent {

  observerTemp = {
    next: (value: number | Array<number>) => {
      // invoked when a value is emitted
      console.log('Value:', value);
    },
    error: (err: HttpErrorResponse) => {
      // invoked when an error is emitted
      console.error('Error:', err);
    },
    complete: () => {
      // Invoked at the completion of the Observable
      console.log('Observable');
    }
  };


  // creation operators

  // of
  // from
  // fromEvent
  // interval



  ofObs$ = of(1, 3, 4, 5, 6)

  ofObsWithArr$ = of([1, 23, 6])

  sub = interval(1000).pipe(take(5)).subscribe(value => console.log(value))

  fromObs$ = from([{ name: "A", age: 22 }, { name: "B", age: 23 }]).subscribe(console.log); // observable




  // capturing the click data on dom and unsubscribing when clicked
  events = fromEvent(document, 'click').subscribe(data => {
    console.log(data)
    this.sub.unsubscribe()
  })






















}
