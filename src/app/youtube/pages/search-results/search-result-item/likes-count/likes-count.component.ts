import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.scss'],
})
export class LikesCountComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
