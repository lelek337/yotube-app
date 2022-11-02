import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
