import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Albums } from './albums';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('Albums', () => {
  let component: Albums;
  let fixture: ComponentFixture<Albums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Albums],
      providers: [
        provideHttpClient(), // <-- Добавь это
        provideHttpClientTesting() // <-- И это
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Albums);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
