import { Injectable } from '@angular/core';

@Injectable()
export class GlobalsService {
  globalCounter: number = 0;
  modalHasBeenOpened: boolean = false;

  constructor() { }

  public getGlobalCounter(): number {
    return this.globalCounter;
  }

  public setGlobalCounter(value: number): void {
    this.globalCounter = value;
  }

  public incrementCounter(): void {
    this.globalCounter++;
  }

  public decrementCounter(): void {
    this.globalCounter--;
  }

  public getModalHasBeenOpened(): boolean {
    return this.modalHasBeenOpened;
  }

  public setModalHasBeenOpened(input: boolean): void {
    this.modalHasBeenOpened = input;
  }
}
