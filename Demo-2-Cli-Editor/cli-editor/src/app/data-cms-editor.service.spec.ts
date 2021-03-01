import { TestBed } from '@angular/core/testing';

import { DataCmsEditorService } from './data-cms-editor.service';

describe('DataCmsEditorService', () => {
  let service: DataCmsEditorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataCmsEditorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
