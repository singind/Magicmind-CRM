import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  router: any = [];

  constructor() { }

  getRoute() {
    console.log(this.router);
   return this.router;
  }

  setRoute(value) {
    this.router = value;
    console.log(this.router);
  }
}
