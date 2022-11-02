import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    const filterBlock: HTMLElement = document.querySelector('.sorting') as HTMLElement;
    filterBlock.classList.toggle('none');
  }
}
