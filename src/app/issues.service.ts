import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})

export class IssuesService {

  private issuesSource$ = new BehaviorSubject(null);
  issues$ = this.issuesSource$.asObservable();
  private isLoadingSource$ = new BehaviorSubject(false);
  isLoading$ = this.isLoadingSource$.asObservable();

  constructor(private http: HttpClient) {}

  getIssues() {
    return this.issues$;
  }

  search(query) {
    this.isLoadingSource$.next(true);
    this.http.get(`https://api.github.com/search/issues?q=${query}+state:open`)
      .pipe(tap(() => {
        return this.isLoadingSource$.next(false);
      }))
      .subscribe((data: any) => this.issuesSource$.next(data.items), error => console.log(error), () => console.log('finished'));
  }
}
