import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
