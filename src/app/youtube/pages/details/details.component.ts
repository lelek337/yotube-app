import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from 'src/app/shared/models/search-item.model';
import { DetailsService } from 'src/app/youtube/services/details.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item!: Item;

  constructor(
    private detailService: DetailsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.item = this.detailService.onClick();
    if (!this.item) this.clickBack();
  }

  clickBack() {
    this.router.navigate(['main']);
  }

}
