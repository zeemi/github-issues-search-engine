import { Injectable } from '@angular/core';

const localStorageKey = 'likedIssuesIds';

@Injectable({
  providedIn: 'root'
})
export class LikedService {

  liked;
  constructor() {
    this.liked = {};
  }

  private store(value) {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }

  private retrieve() {
    return JSON.parse(localStorage.getItem(localStorageKey)) || {};
  }

  init() {
    this.liked = this.retrieve();
  }
  toggleLiked(id) {
    const modifiedLiked = this.retrieve();
    modifiedLiked[id] = !modifiedLiked[id];
    this.store( modifiedLiked);
    this.liked = modifiedLiked;
  }
}
