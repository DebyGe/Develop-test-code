import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMSEditorComponent } from './cmseditor.component';

describe('CMSEditorComponent', () => {
  let component: CMSEditorComponent;
  let fixture: ComponentFixture<CMSEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMSEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CMSEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
