import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const localStorageKey = 'likedIssuesIds';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  private likedSource$ = new BehaviorSubject({});
  liked$ = this.likedSource$.asObservable();

  constructor() {}

  private store(value) {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }

  private retrieve() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || {};
  }

  init() {
    this.likedSource$.next(this.retrieve());
  }

  toggleLiked(id) {
    const liked = this.retrieve();
    liked[id] = !liked[id];
    this.store(liked);
    this.likedSource$.next(liked);
  }
}
