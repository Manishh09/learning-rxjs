import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionDemoComponent } from './subscription-demo.component';

describe('SubscriptionDemoComponent', () => {
  let component: SubscriptionDemoComponent;
  let fixture: ComponentFixture<SubscriptionDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriptionDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
