import { Component, AfterViewInit } from '@angular/core';
import { IssuesService } from '../issues.service';
import { fromEvent } from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/internal/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent implements AfterViewInit {
  issueFilterForm;
  subscription;
  constructor(private issuesService: IssuesService) {
  }

  ngAfterViewInit(): void {
    const searchBox = document.getElementById('search-bar');
    console.log(searchBox);
    const searchQuery$ = fromEvent<any>(searchBox, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(400),
        distinctUntilChanged()
      );
    this.subscription = searchQuery$
      .subscribe(
        query => {
          console.log(query);
          this.issuesService.search(query);
        }
      );

  }
}
