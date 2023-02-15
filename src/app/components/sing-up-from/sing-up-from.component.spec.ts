import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpFromComponent } from './sing-up-from.component';

describe('SingUpFromComponent', () => {
  let component: SingUpFromComponent;
  let fixture: ComponentFixture<SingUpFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingUpFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingUpFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
