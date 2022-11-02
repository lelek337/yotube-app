import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from 'src/app/shared/models/search-item.model';
import { DetailsService } from 'src/app/youtube/services/details.service';

@Component({
  selector: 'app-more-button',
  templateUrl: './more-button.component.html',
  styleUrls: ['./more-button.component.scss'],
})
export class MoreButtonComponent implements OnInit {

  constructor(
    private detailsService: DetailsService,
    private router: Router,
  ) { }

  @Input() item!: Item;

  ngOnInit(): void {
  }

  onClick() {
    this.detailsService.doClick(this.item);
    this.router.navigate(['/main/more']);
  }
}
