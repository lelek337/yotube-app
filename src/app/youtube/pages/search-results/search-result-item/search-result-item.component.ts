import { Component, OnInit, Input } from '@angular/core';

import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {

  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
