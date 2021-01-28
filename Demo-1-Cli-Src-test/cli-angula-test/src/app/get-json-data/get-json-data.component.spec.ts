import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetJsonDataComponent } from './get-json-data.component';

describe('GetJsonDataComponent', () => {
  let component: GetJsonDataComponent;
  let fixture: ComponentFixture<GetJsonDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetJsonDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetJsonDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
