import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-short-description',
  templateUrl: './user-short-description.component.html',
  styleUrls: ['./user-short-description.component.sass']
})
export class UserShortDescriptionComponent implements OnInit {
  imageUrl = 'assets/sample_face.png';
  userName = 'Roman Kutepov';
  userRole = 'Brain Director';

  constructor() { }

  ngOnInit(): void {
  }

}
