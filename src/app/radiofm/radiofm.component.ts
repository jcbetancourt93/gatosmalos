import { Component } from '@angular/core';

interface Song {
  name: string;
  filePath: string;
}

@Component({
  selector: 'app-radiofm',
  templateUrl: './radiofm.component.html',
  styleUrls: ['./radiofm.component.css']
})
export class RadiofmComponent {
  audioPlayer: HTMLAudioElement;
  songs: Song[] = [
    { name: 'Canción 1', filePath: 'assets/musica/1.mp3' },
    { name: 'Canción 2', filePath: 'assets/musica/2.mp3' },
    { name: 'Canción 3', filePath: 'assets/musica/3.mp3' },
    { name: 'Canción 4', filePath: 'assets/musica/4.mp3' },
    { name: 'Canción 5', filePath: 'assets/musica/5.mp3' },
  ];
  currentSongIndex: number = 0;

  constructor() {
    this.audioPlayer = new Audio();
  }

  playMusic() {
    this.audioPlayer.src = this.songs[this.currentSongIndex].filePath;
    this.audioPlayer.play();
  }

  stopMusic() {
    this.audioPlayer.pause();
  }

  selectSong(index: number) {
    this.currentSongIndex = index;
    this.playMusic();
  }
}
