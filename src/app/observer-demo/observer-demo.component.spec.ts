import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverDemoComponent } from './observer-demo.component';

describe('ObserverDemoComponent', () => {
  let component: ObserverDemoComponent;
  let fixture: ComponentFixture<ObserverDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObserverDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
