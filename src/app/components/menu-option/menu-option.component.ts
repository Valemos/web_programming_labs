import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.sass']
})
export class MenuOptionComponent implements OnInit {
  @Input() name: string;
  @Input() route: '/#';

  constructor() { }

  ngOnInit(): void {
  }
}
