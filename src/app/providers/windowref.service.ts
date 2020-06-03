import { Injectable } from '@angular/core';

function getWindow (): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowrefService {
  get nativeWindow () {
    return getWindow();
  }
  constructor() { }
}
