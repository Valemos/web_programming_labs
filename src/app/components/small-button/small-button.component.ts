import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-small-button',
  templateUrl: './small-button.component.html',
  styleUrls: ['./small-button.component.sass']
})
export class SmallButtonComponent implements OnInit {
  @Input() imagePath: string;

  constructor() { }

  ngOnInit(): void {
  }

}
