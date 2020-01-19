import {EventEmitter, Injectable} from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import fakeIssues from './issues';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {
  // https://api.github.com/search/issues?q=
  issues$ = new EventEmitter();
  constructor() {
    this.issues$.emit(fakeIssues);
  }

  getIssuesf() {
    return this.issues$;
  }

  search(query) {
    return this.issues$.emit([...fakeIssues, ...fakeIssues]);
  }
}
