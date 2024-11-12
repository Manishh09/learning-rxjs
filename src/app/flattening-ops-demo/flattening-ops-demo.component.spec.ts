import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatteningOpsDemoComponent } from './flattening-ops-demo.component';

describe('FlatteningOpsDemoComponent', () => {
  let component: FlatteningOpsDemoComponent;
  let fixture: ComponentFixture<FlatteningOpsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlatteningOpsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlatteningOpsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
