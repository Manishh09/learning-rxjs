import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreationOpsDemoComponent } from './creation-ops-demo.component';


describe('CreationOpsDemoComponent', () => {
  let component: CreationOpsDemoComponent;
  let fixture: ComponentFixture<CreationOpsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationOpsDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationOpsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
