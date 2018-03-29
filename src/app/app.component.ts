import { Component, ViewChild, HostListener } from '@angular/core';
import { ContentComponent } from './content/content.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { OnInit, AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { log } from 'util';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';
import { GlobalsService } from './services/helpers/globals.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  modal: any;
  title = 'app';
  static runIntro: boolean = true;
  menuElements: any;
  contentAreaLinks: any;
  currentView: any;
  isLeftMenuActive: boolean;
  counter: number;
  counterContent: number;
  constructor(private _daoGlobal: GlobalsService) { }

  hideModal() {
    this.modal = document.getElementsByClassName('modalboot');
    this.modal[0].style.visibility = 'hidden';
    document.body.style.backgroundColor = 'rgb(30, 50, 228)';
  }

  ngOnInit() {
    this.menuElements = $('.menu-wrapper > li > a');
    this.isLeftMenuActive = true;
    this.counter = 0;
    this.counterContent = 0;
    //firstBootupLines();
    this.hideModal();
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
        this.menuElements = $('.menu-wrapper > li > a');
      }

      switch (keyPress) {
        case 40: {
          // ArrowDown and add Selected (which highlights red) 
          this.menuElements.removeClass('selected');

          if (this.isLeftMenuActive === true) {
            this._daoGlobal.incrementCounter();
            this.menuElements[this.getIndex()].classList.add("selected");
            this.menuElements[this.getIndex()].click();
          } else {
            this.counterContent++;
            this.menuElements[this.getIndex()].classList.add("selected");
          }

          break;
        }

        case 38: {
          // Move up and add Selected (which highlights red) 
          this.menuElements.removeClass('selected');

          if (this.isLeftMenuActive === true) {
            this._daoGlobal.decrementCounter();
            this.menuElements[this.getIndex()].classList.add("selected");
            this.menuElements[this.getIndex()].click();
          } else {
            this.counterContent--;
            this.menuElements[this.getIndex()].classList.add("selected");
          }
          break;
        }

        case 37: 
        case 27: {
          // (ESC or leftArrow) Remove the selected (red background) from the menu and put IsLeftMenuActive to true
          if ($('#myModal').css('visibility') == 'visible'){
            console.log("visible");
            $('#myModal').click();

          }
          if (this.isLeftMenuActive !== true) {
            this.menuElements.removeClass('selected');
            this.menuElements = $('.menu-wrapper > li');
            this.isLeftMenuActive = true;
            this.menuElements[this.getIndex()].classList.add("selected");
            this.counterContent = 0;
          }
          break;
        }

        case 39:
        case 13: {
          // (ENTER or Rightarrow)   
          if (this.isLeftMenuActive === true) {
            //Check to see which section we are entering
            var whichBtn = $('.active > p');

            if (whichBtn.text() == " History ") {
              this.menuElements[this.getIndex()].click();
              this.menuElements[this.getIndex()].classList.add("active");
              this.menuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.menuElements = $('.device-links > li > article > h5');
              $('#2018').focus();
            }
            else if (whichBtn.text() == " Skills ") {
              console.log("features");
              this.menuElements[this.getIndex()].click();
              this.menuElements[this.getIndex()].classList.add("active");
              this.menuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.menuElements = $('.device-links > li > span');
              document.getElementById('firstspan').focus();
              $('#firstspan').css('color', 'black');
            }
            else {
              this.menuElements[this.getIndex()].click();
              this.menuElements[this.getIndex()].classList.add("active");
              this.menuElements.removeClass('selected');
              this.isLeftMenuActive = false;
              this.menuElements = $('.device-links > li > a');
              this.menuElements[0].classList.add("selected");
            }
          }
          else {
            this.menuElements[this.getIndex()].click();
          }
          break;
        }
      }
    }
  }

  getIndex(): number {
    if (this.isLeftMenuActive === true) {
      return ((this._daoGlobal.getGlobalCounter() % this.menuElements.length) + this.menuElements.length) % this.menuElements.length;
    }
    else {
      return ((this.counterContent % this.menuElements.length) + this.menuElements.length) % this.menuElements.length;
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
  clearInterval(interval);
  showVirtualDevices();
}

function showVirtualDevices() {
  var interval = setTimeout(function () {
    $('#virtual-devices').css('visibility', 'visible');
  }, 1000);
  clearInterval(interval);
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
