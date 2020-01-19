import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import fakeIssues from './issues';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {
  // https://api.github.com/search/issues?q=
  issues$: Observable<any>;
  constructor() {
    this.issues$ = of(fakeIssues);
  }

  getAll() {
    return this.issues$;
  }
}
