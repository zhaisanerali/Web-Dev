import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router'; // Для получения ID из URL
import { FormsModule } from '@angular/forms'; // Для редактирования текста
import { Album } from '../../models/album.model';
import { AlbumService } from '../../services/album';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album = signal<Album | null>(null);
  editableTitle = signal('');
  isLoading = signal(true);
  error = signal<string | null>(null);
  saveMessage = signal('');

  constructor(
    private readonly route: ActivatedRoute,
    private readonly albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = Number(params.get('id'));
          this.isLoading.set(true);
          this.error.set(null);
          return this.albumService.getAlbum(id);
        })
      )
      .subscribe({
        next: (album) => {
          this.album.set(album);
          this.editableTitle.set(album.title);
          this.isLoading.set(false);
        },
        error: () => {
          this.error.set('Unable to load album details.');
          this.isLoading.set(false);
        }
      });
  }

  save(): void {
    const current = this.album();
    if (!current) {
      return;
    }

    const updated: Album = {
      ...current,
      title: this.editableTitle().trim() || current.title
    };

    this.albumService.updateAlbum(updated).subscribe({
      next: (album) => {
        this.album.set(album);
        this.editableTitle.set(album.title);
        this.saveMessage.set('Album title updated.');
        setTimeout(() => {
          this.saveMessage.set('');
        }, 2000);
      },
      error: () => {
        this.error.set('Unable to save album title.');
      }
    });
  }
}

 