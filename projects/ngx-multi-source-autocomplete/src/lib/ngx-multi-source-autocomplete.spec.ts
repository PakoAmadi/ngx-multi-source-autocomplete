import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMultiSourceAutocomplete } from './ngx-multi-source-autocomplete';

describe('NgxMultiSourceAutocomplete', () => {
  let component: NgxMultiSourceAutocomplete;
  let fixture: ComponentFixture<NgxMultiSourceAutocomplete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMultiSourceAutocomplete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxMultiSourceAutocomplete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
