import { Component, OnInit } from '@angular/core';
import YoutubeService from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {

  constructor(private youtubeService: YoutubeService) { }

  ngOnInit(): void {
  }

  search(event: Event) {
    const target = event.target as HTMLInputElement;
    this.youtubeService.searchQuery(target.value);
  }
}
