import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { LikedService } from '../liked.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit{

  constructor(
    private issuesService: IssuesService,
    private likedService: LikedService,
  ) {}

  toggleLiked(id) {
    this.likedService.toggleLiked(id);
  }

  ngOnInit() {
    this.likedService.init();
  }
}
