import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetail } from './album-detail';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AlbumDetail', () => {
  let component: AlbumDetail;
  let fixture: ComponentFixture<AlbumDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumDetail],
      providers: [
        provideHttpClient(), // <-- Добавь это
        provideHttpClientTesting() // <-- И это
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
