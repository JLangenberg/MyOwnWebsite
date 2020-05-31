import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaApplicationsComponent } from './java-applications.component';

describe('JavaApplicationsComponent', () => {
  let component: JavaApplicationsComponent;
  let fixture: ComponentFixture<JavaApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
