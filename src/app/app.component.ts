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

  MenuElements: any;
  contentAreaLinks: any;
  currentView: any;
  isLeftMenuActive: boolean;
  counter: number;
  counterContent: number;

  ngOnInit() {
    this.MenuElements = $('.menu-wrapper > li > a');
    this.isLeftMenuActive = true;
    this.counter = 0;
    this.counterContent = 0;
  }

  /* If isLeftMenuActive is true we only do stearing on the left menu.
  If false, we instead navigate in the rightside component which content 
  is always wrapped in a div with class "device-links"  */


  // FIXA OnClick med mus så countern uppdateras

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    let keyPress = event.keyCode;
    if (this.isLeftMenuActive === false) {
      this.MenuElements = $('.device-links > li > a');
    }
    else {
      this.MenuElements = $('.menu-wrapper > li > a');
    }



    switch (keyPress) {
      case 40: {
        // ArrowDown and add Selected (which highlights red) 
        this.MenuElements.removeClass('selected');
        

        if (this.isLeftMenuActive === true) {
          this.counter++;
          this.MenuElements[this.getIndex()].classList.add("selected");
          this.MenuElements[this.getIndex()].click();
        }else{
          this.counterContent++;
          this.MenuElements[this.getIndex()].classList.add("selected");
        }

        break;
      }

      case 39: {
        // Rightarrow treated same as enter
        if(this.isLeftMenuActive === true){
          this.MenuElements[this.getIndex()].click();
          this.isLeftMenuActive = false;
          this.MenuElements.removeClass('selected');
  
          this.MenuElements = $('.device-links > li > a');
          console.log(this.MenuElements);
          this.MenuElements[0].classList.add("selected");
        }
        else{
          this.MenuElements[this.getIndex()].click();
        }  
        break;
      }

      case 38: {
        // Move up and add Selected (which highlights red) 
        this.MenuElements.removeClass('selected');

      if (this.isLeftMenuActive === true) {
          this.counter--;
          this.MenuElements[this.getIndex()].classList.add("selected");
          this.MenuElements[this.getIndex()].click();
        }else{
          this.counterContent--;
          this.MenuElements[this.getIndex()].classList.add("selected");
        }
        break;
      }

      case 37: {
        // Leftarrow treated as ESC
        if (this.isLeftMenuActive !== true) {
          this.MenuElements.removeClass('selected');
          this.MenuElements = $('.menu-wrapper > li > .active');
          this.isLeftMenuActive = true;
          this.MenuElements[this.getIndex()].classList.add("selected");
          this.counterContent = 0;

        }
        break;
      }

      case 27: {

        // (ESC) Remove the selected (red background) from the menu and put IsLeftMenuActive to true
        if (this.isLeftMenuActive !== true) {
          this.MenuElements.removeClass('selected');
          this.MenuElements = $('.menu-wrapper > li > .active');

          this.isLeftMenuActive = true;
          this.MenuElements[this.getIndex()].classList.add("selected");
          this.counterContent = 0;
        }
        break;
      }

      case 13: {
        // (ENTER) 
        if(this.isLeftMenuActive === true){
          this.MenuElements[this.getIndex()].click();
          this.isLeftMenuActive = false;
          this.MenuElements.removeClass('selected');
  
          this.MenuElements = $('.device-links > li > a');
          this.MenuElements[0].classList.add("selected");
        }
        else{
          this.MenuElements[this.getIndex()].click();
        }  
        break;

      }
    }
  }
  getIndex(): number {
    if (this.isLeftMenuActive === true) {
      return ((this.counter % this.MenuElements.length) + this.MenuElements.length) % this.MenuElements.length;
    }
    else {
      return ((this.counterContent % this.MenuElements.length) + this.MenuElements.length) % this.MenuElements.length;
    }
  }

}

