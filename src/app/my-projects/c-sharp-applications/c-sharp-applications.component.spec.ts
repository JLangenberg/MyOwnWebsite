import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CSharpApplicationsComponent } from './c-sharp-applications.component';

describe('CSharpApplicationsComponent', () => {
  let component: CSharpApplicationsComponent;
  let fixture: ComponentFixture<CSharpApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CSharpApplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CSharpApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
