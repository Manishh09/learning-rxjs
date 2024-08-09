import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval, of } from 'rxjs';

@Component({
  selector: 'app-subscription-demo',
  standalone: true,
  imports: [],
  templateUrl: './subscription-demo.component.html',
  styleUrl: './subscription-demo.component.scss',
})
export class SubscriptionDemoComponent implements OnInit, OnDestroy {
  subscriptionsAdd!: Subscription;
  subscriptionsArr: Subscription[] = [];
  observable$ = interval(1000);

  subscriptionTemp = this.observable$.subscribe((x) => console.log(x));
  // Later:
  // This cancels the ongoing Observable execution which
  // was started by calling subscribe with an Observer.
  unsub = this.subscriptionTemp.unsubscribe();

  // A subscription is a disposable resource
  // basically an execution of an Observable

  // there can be multiple subscriptions
  obs1$ = interval(1000);
  obs2$ = of([1, 2, 4, 5]);
  subscription1 = this.obs1$.subscribe({
    next: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log('completed');
    },
  });

  subscription2 = this.obs2$.subscribe({
    next: (data) => {
      console.log(data);
    },
    error: (err) => {
      console.log(err);
    },
    complete: () => {
      console.log('completed');
    },
  });
  ngOnInit(): void {
    // using add

    this.addSubscriptions(this.subscription1);
    this.addSubscriptions(this.subscription2);

    // using array
    this.subscriptionsArr.push(this.subscription1, this.subscription2);
  }

  /**
   * group active subscriptions
   * @param subscription Subscription
   */

  addSubscriptions(subscription: Subscription) {
    this.subscriptionsAdd.add(subscription);
  }

  /**
   * cleans subscriptions if not closed
   * @param subscriptions Array of Subscriptions
   */
  clearSubscriptions(subscriptions: Subscription | Subscription[]): void {
    if (Array.isArray(subscriptions)) {
      subscriptions.forEach((subscription) => {
        if (!subscription.closed) {
          subscription.unsubscribe();
        }
      });
      return;
    }
    if (!subscriptions.closed) {
      subscriptions.unsubscribe();
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptionsArr.length) {
      this.clearSubscriptions(this.subscriptionsArr);
      return;
    }
    this.clearSubscriptions(this.subscriptionsAdd);
  }
}
