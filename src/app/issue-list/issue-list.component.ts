import { Component, OnInit } from '@angular/core';
import { IssuesService } from '../issues.service';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.scss']
})
export class IssueListComponent implements OnInit {

  constructor(private issuesService: IssuesService) {}

  issues$ = this.issuesService.getAll();

  ngOnInit() {
  }

}
