import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HigherOrderopsDemoComponent } from './higher-orderops-demo.component';

describe('HigherOrderopsDemoComponent', () => {
  let component: HigherOrderopsDemoComponent;
  let fixture: ComponentFixture<HigherOrderopsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HigherOrderopsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HigherOrderopsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
