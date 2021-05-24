import { Component, OnInit, Input, Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
@Component({
  selector: 'app-user-info-git-hub',
  templateUrl: './user-info-git-hub.component.html',
  styleUrls: ['./user-info-git-hub.component.sass']
})
export class UserInfoGitHubComponent implements OnInit {

  @Input() userDataUrl: string;

  name: string = '';
  role: string = 'Developer';
  userImage: string = '';

  constructor(private http: HttpClient) {
    this.userDataUrl = '';
  }

  ngOnInit(): void {
    // fetch data from github
    this.http.get(this.userDataUrl).subscribe((data) => this.assignUserData(data));
  }

  assignUserData(data): void {
    console.log(data);
    this.name = data.name;
    this.userImage = data.avatar_url;
  }
}
