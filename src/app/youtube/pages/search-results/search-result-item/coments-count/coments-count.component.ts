import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-coments-count',
  templateUrl: './coments-count.component.html',
  styleUrls: ['./coments-count.component.scss'],
})
export class ComentsCountComponent implements OnInit {
  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
