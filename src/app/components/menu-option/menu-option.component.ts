import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.sass']
})
export class MenuOptionComponent implements OnInit {
  @Input() name: string;
  @Input() route: string;
  @Input() imagePath: string;

  constructor() { }

  ngOnInit(): void {
    if (this.route === undefined) {
      this.route = '/';
    }
    if (this.imagePath === undefined) {
      this.imagePath = 'assets/circle-outline.svg';
    }
  }
}
