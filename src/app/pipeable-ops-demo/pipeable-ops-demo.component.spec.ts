import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeableOpsDemoComponent } from './pipeable-ops-demo.component';

describe('PipeableOpsDemoComponent', () => {
  let component: PipeableOpsDemoComponent;
  let fixture: ComponentFixture<PipeableOpsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeableOpsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeableOpsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
