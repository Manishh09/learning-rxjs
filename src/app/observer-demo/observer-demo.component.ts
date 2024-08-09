import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-observer-demo',
  standalone: true,
  imports: [],
  templateUrl: './observer-demo.component.html',
  styleUrl: './observer-demo.component.scss'
})
export class ObserverDemoComponent {

  myObs$ = from([{name: "A", age: 22}, {name: "B", age: 23}]); // observable

  // older syntax
  subdata = this.myObs$.subscribe(
    (data) => {
      console.log("data from source",data)
    },
    (error) => {
      console.log("Error occured",error)
    },
    () => {
      console.log("completed")
    }
  )

  // Observer is a consumer of values / data delivered by the source / Observable
  
  // updated syntax
  observer = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.log(error),
    complete: ()=> console.log("completed")
  }
  // optional callbacks - complete
  observe1 = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.log(error),
  }

  // optional callbacks - error
  observe2 = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.log(error),
  }

  // usage of observer object
  updatedSub = this.myObs$.subscribe(this.observer);
  //updatedSub = this.myObs$.subscribe(this.observer1);
  //updatedSub = this.myObs$.subscribe(this.observer2);
}
