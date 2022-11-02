import { Component, Input, OnInit } from '@angular/core';

import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.scss'],
})
export class ViewsCountComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
