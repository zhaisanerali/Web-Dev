import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotos } from './album-photos';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AlbumPhotos', () => {
  let component: AlbumPhotos;
  let fixture: ComponentFixture<AlbumPhotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumPhotos],
      providers: [
        provideHttpClient(), // <-- Добавь это
        provideHttpClientTesting() // <-- И это
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumPhotos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
