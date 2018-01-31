import { Component, OnInit,HostListener } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {

  contentAreaLinks: any;
  currentView: any;
  activeMenu: boolean;
  counter: number;

  constructor() { }

  ngOnInit() {
    this.contentAreaLinks = $('.device-links > a');
    this.contentAreaLinks[0].classList.add("selected");
    this.counter = 0;
    this.activeMenu = true;
  }
  
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = event.keyCode;

    // is this the active view
    var cat = $('.active');
    if(this.activeMenu === true){
    
    switch (x) {
      case 40: {
        this.contentAreaLinks.removeClass('selected');
        this.counter++;
        let index = ((this.counter % this.contentAreaLinks.length) + this.contentAreaLinks.length) % this.contentAreaLinks.length;
        let myObj = this.contentAreaLinks[index];
        myObj.classList.add("selected");
        break;
      }
      case 39: {
        console.log("right");
        let index = ((this.counter % this.contentAreaLinks.length) + this.contentAreaLinks.length) % this.contentAreaLinks.length;
        this.contentAreaLinks[index].click();

        break;
      }
      case 38: {
        this.contentAreaLinks.removeClass('selected');
        this.counter--;
        let index = ((this.counter % this.contentAreaLinks.length) + this.contentAreaLinks.length) % this.contentAreaLinks.length;
        let myObj = this.contentAreaLinks[index];
        myObj.classList.add("selected");
        break;
      }
      case 37: {
        console.log("left");
        break;
      }
      case 27: {
        console.log("esc");
        this.contentAreaLinks.removeClass('selected');
        this.activeMenu = false;
        
        break;
      }
      case 13: {
        console.log("enter")
        
        let index = ((this.counter % this.contentAreaLinks.length) + this.contentAreaLinks.length) % this.contentAreaLinks.length;
        this.contentAreaLinks[index].click();

        this.afterMenuClick();
        break;
      }      
    }

    }
  }
  afterMenuClick() {
    this.activeMenu = false;
    this.contentAreaLinks.removeClass('selected');
    this.contentAreaLinks = $('.menu-wrapper > a'); 


  }
}
