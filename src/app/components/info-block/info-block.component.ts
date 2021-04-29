import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-block',
  templateUrl: './info-block.component.html',
  styleUrls: ['./info-block.component.sass']
})
export class InfoBlockComponent implements OnInit {
  @Input() header: string;
  @Input() content: string;

  constructor() { }

  ngOnInit(): void {
  }

}
