import { Component, ViewChild, HostListener } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  title = 'app';

  leftMenuLinks: any;
  contentAreaLinks: any;
  currentView: any;
  isLeftMenuActive: boolean;
  counter: number;
  counterContent = 0;

  ngOnInit() {
    this.leftMenuLinks = $('.menu-wrapper > a');
    
    this.isLeftMenuActive = true;
    this.counter = 0;
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let x = event.keyCode;
    this.contentAreaLinks = $('.device-links > a');
    
    var corv = $('.device-links > a');
    console.log(corv);
    if (x === 27) {
      this.isLeftMenuActive = true;
    }
    if (this.isLeftMenuActive === true) {

      switch (x) {
        case 40: {
          this.leftMenuLinks.removeClass('selected');
          this.counter++;
          let index = ((this.counter % this.leftMenuLinks.length) + this.leftMenuLinks.length) % this.leftMenuLinks.length;
          let myObj = this.leftMenuLinks[index];
          myObj.classList.add("selected");
          break;
        }
        case 39: {
          console.log("right");
          let index = ((this.counter % this.leftMenuLinks.length) + this.leftMenuLinks.length) % this.leftMenuLinks.length;
          this.leftMenuLinks[index].click();

          this.afterMenuClick();

          break;
        }
        case 38: {
          this.leftMenuLinks.removeClass('selected');
          this.counter--;
          let index = ((this.counter % this.leftMenuLinks.length) + this.leftMenuLinks.length) % this.leftMenuLinks.length;
          let myObj = this.leftMenuLinks[index];
          myObj.classList.add("selected");
          break;
        }
        case 37: {
          console.log("left");
          break;
        }
        case 27: {
          console.log("esc");
          var cat = $('.active');
          this.leftMenuLinks.removeClass('selected');
          let index = ((this.counter % this.leftMenuLinks.length) + this.leftMenuLinks.length) % this.leftMenuLinks.length;
          let myObj = this.leftMenuLinks[index];
          myObj.classList.add("selected");
          break;
        }
        case 13: {
          console.log("enter");

          let index = ((this.counter % this.leftMenuLinks.length) + this.leftMenuLinks.length) % this.leftMenuLinks.length;
          let myObj = this.leftMenuLinks[index];
          console.log("hasclass "+this.leftMenuLinks[index]);
         
            this.leftMenuLinks[index].click();

            this.afterMenuClick();
          
         



          break;
        }
      }
    }
  }
  afterMenuClick() {
    this.isLeftMenuActive = false;
    this.leftMenuLinks.removeClass('selected');
    this.contentAreaLinks = $('.menu-wrapper > a');


  }

}

