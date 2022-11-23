import {Injectable} from '@angular/core';
import {Song} from '../model/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  playlist: Song[] = [
    {
      id: '5HEOfz4KGlY',
      name: 'Tòng phu - Nguyễn Đình Vũ - Út Nhị'
    },
    {
      id: 'uo6VU4euIbY',
      name: 'Níu Duyên - Ngô Bảo Bình'
    },
    {
      id: 'LaxkmhiECfM',
      name: 'Bên Trên Tầng Lầu - Tăng Duy Tân'
    },
    {
      id: '2e5doBPOqPM',
      name: 'Anh Yêu Vội Thế - LaLa Trần'
    },
    {
      id: 'PG3P_RoYYtI',
      name: 'Dòng Thời Gian - C0622i1'
    }
  ];

  constructor() {
  }

  findSongById(id: string | null) {
    return this.playlist.find(item => item.id === id);
  }
}
