import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwtchcaseComponent } from './swtchcase.component';

describe('SwtchcaseComponent', () => {
  let component: SwtchcaseComponent;
  let fixture: ComponentFixture<SwtchcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwtchcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwtchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
