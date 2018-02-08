import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  globalCounter: number = 0;

  constructor() { }

  getCounter(): number {
    return this.globalCounter;
  }

  setGlobalCounter(value: number): void {
    this.globalCounter = value;
  }

  incrementCounter() : void{
    this.globalCounter++;
  }
  decrementCounter() : void{
    this.globalCounter--;
  }
}
