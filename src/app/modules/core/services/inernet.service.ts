import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InternetConnectionService {
  private isOnlineSubject = new BehaviorSubject<boolean>(navigator.onLine);

  constructor() {
    // Listen for online and offline events
    window.addEventListener('online', this.updateOnlineStatus);
    window.addEventListener('offline', this.updateOfflineStatus);
  }

  private updateOnlineStatus = () => {
    this.isOnlineSubject.next(true);
  };

  private updateOfflineStatus = () => {
    this.isOnlineSubject.next(false);
  };

  // Observable to subscribe to the network status
  get isOnline$() {
    return this.isOnlineSubject.asObservable();
  }

  // Direct check if online
  get isOnline(): boolean {
    return this.isOnlineSubject.value;
  }
}

