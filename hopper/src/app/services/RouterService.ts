import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router) {}

  //   navigateToProfile(userId: number) {
  //     if (userId) {
  //       this.router.navigate(['/profile', userId]);
  //     } else {
  //       this.router.navigate(['/login']);
  //     }
  //   }

  navigateToTicketEdit() {
    this.router.navigate(['/ticketedit']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  //   navigateToError(errorCode: number) {
  //     this.router.navigate(['/error'], { queryParams: { code: errorCode } });
  //   }
}
