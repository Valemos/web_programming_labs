import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-short-description',
  templateUrl: './user-short-description.component.html',
  styleUrls: ['./user-short-description.component.sass']
})
export class UserShortDescriptionComponent implements OnInit {
  @Input() imageUrl;
  @Input() userName;
  @Input() userRole;

  constructor() {
    this.imageUrl = '';
    this.userName = '';
    this.userRole = '';
  }

  ngOnInit(): void {
  }
}
