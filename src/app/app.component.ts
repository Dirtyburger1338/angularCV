import { Component, ViewChild, HostListener } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { log } from 'util';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'app';
  static runIntro: boolean = true;
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

    firstBootupLines();

  }


  /* If isLeftMenuActive is true we only do stearing on the left menu.
  If false, we instead navigate in the rightside component which content 
  is always wrapped in a div with class "device-links"  */

  // FIXA OnClick med mus så countern uppdateras

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {

    /* If bootscreen is active */
    if ($('.modalboot').css('visibility') === 'visible') {
      /* If bootscreen is waiting for input */
      if ($('.modalboot').attr('data') === "readyToClose") {

        $('.modalboot').css('visibility', 'hidden');

        $('body').css('background-color', 'rgb(30, 50, 228)');
        $('.modalboot').remove();
      }
      /* do nothing */
      else {
        return;
      }
    }
    /* If bootscreen is gone, proceed as normal */
    else {
      let keyPress = event.keyCode;

      /* If we are navigating the submenu or not */
      if (this.isLeftMenuActive === false) {
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
          } else {
            this.counterContent++;

            this.MenuElements[this.getIndex()].classList.add("selected");
          }

          break;
        }

        case 39: {
          // Rightarrow (treated same as enter)
          if (this.isLeftMenuActive === true) {
            //Check to see which section we are entering
            var whichBtn = $('.active > p');

            if (whichBtn.text() == "Version List") {
              this.MenuElements[this.getIndex()].click();
              this.MenuElements[this.getIndex()].classList.add("active");
              this.MenuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.MenuElements = $('.device-links > li > article > h5');
              $('#2018').focus();
            }
            else if (whichBtn.text() == "Device Features") {
              //Do not change menu to inner. 
            }
            else {
              this.MenuElements[this.getIndex()].click();
              this.MenuElements[this.getIndex()].classList.add("active");
              this.MenuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.MenuElements = $('.device-links > li > a');
              this.MenuElements[0].classList.add("selected");
            }
          }
          else {
            console.log("no");
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
          } else {
            this.counterContent--;

            this.MenuElements[this.getIndex()].classList.add("selected");
          }
          break;
        }

        case 37: {
          // Leftarrow treated as ESC

          if (this.isLeftMenuActive !== true) {
            this.MenuElements.removeClass('selected');
            this.MenuElements = $('.menu-wrapper > li');
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
            this.MenuElements = $('.menu-wrapper > li');
            this.isLeftMenuActive = true;
            this.counterContent = 0;
          }
          break;
        }

        case 13: {
          // (ENTER)   
          if (this.isLeftMenuActive === true) {
            //Check to see which section we are entering
            var whichBtn = $('.active > p');

            if (whichBtn.text() == "Version List") {
              this.MenuElements[this.getIndex()].click();
              this.MenuElements[this.getIndex()].classList.add("active");
              this.MenuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.MenuElements = $('.device-links > li > article > h5');
              $('#2018').focus();
            }
            else if (whichBtn.text() == "Device Features") {
              console.log("features");
            }
            else {
              this.MenuElements[this.getIndex()].click();
              this.MenuElements[this.getIndex()].classList.add("active");
              this.MenuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.MenuElements = $('.device-links > li > a');
              this.MenuElements[0].classList.add("selected");
            }
          }
          else {
            console.log("no");
            this.MenuElements[this.getIndex()].click();
          }
          break;
        }
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

function firstBootupLines() {
  var b = $('.modalboot > p')
  var delay = 110;

  var i = 0;

  var interval = setInterval(function () {
    if (i < b.length) {
      $(b[i]).css('visibility', 'visible');
      i++;
    }
    else {
      clearInterval(interval);
      percentCounter();
    }
  }, delay);

}

function percentCounter() {
  var delay = 50;
  var i = 1;
  var interval = setInterval(function () {
    if (i < 976762) {
      $('#percent').css('visibility', 'visible');
      $('#percent').text(i + "MB");
      i *= 2;
      i += 6;
    }
    else {
      $('#percent').text(976762 + "MB");
      clearInterval(interval);
      showSata();
    }
  }, delay);
}

function showSata() {
  var interval = setTimeout(function () {
    $('.modal-sata').css('visibility', 'visible');
  }, 650);
  showVirtualDevices();
}

function showVirtualDevices() {
  var interval = setTimeout(function () {
    $('#virtual-devices').css('visibility', 'visible');
  }, 1000);
  showPressToEnter()
}

function showPressToEnter() {
  var interval = setTimeout(function () {
    $('#pressEnter').css('visibility', 'visible');
    $('.modalboot').attr('data', 'readyToClose');
  }, 1400);

}




$('body').click(function (event) {
  if ($('.modalboot').attr('data') === "readyToClose") {
    $('.modalboot').remove();
    $('body').css('background-color', 'rgb(30, 50, 228)');
  }
});


  $('.leftMenuLinks').click(function() {
    console.log("menuhover");
  });

