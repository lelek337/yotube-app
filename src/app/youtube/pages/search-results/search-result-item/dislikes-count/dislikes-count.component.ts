import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-dislikes-count',
  templateUrl: './dislikes-count.component.html',
  styleUrls: ['./dislikes-count.component.scss'],
})
export class DislikesCountComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
