import { Component, OnInit, HostListener } from '@angular/core';
import { getRandomString } from 'selenium-webdriver/safari';
import { GlobalsService } from '../services/helpers/globals.service';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {
  i: number;
  modal: any;
  btn: any;
  span: any;
  txt = 'cd images';
  txt2 = 'MS_Print RAW_20010523.txt';

  constructor(public _daoGlobals: GlobalsService) { }

  ngOnInit() {
    this.modal = document.getElementById('myModal');
    this.i = 0;
    this.span = document.getElementsByClassName("close")[0];
  }

  openModal(): void {


    this.firstTypingAnimation();


    this.modal.style.display = 'block';
  }

  PortraitPrintTypeAnimation(): void {
    const inputPortraitString = ',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,!' +
      ',*\/\/,,,,,,,,,,,,,,,,,,,,,,,,,,%%%%%%%%#\/,,,,,,,,,,*,,,,,,,,,,,,,,,,,!' +
      ',,,,,,,,,,,*,,******,**,*%%%%%%%%%%###########(,,,,,,,,,,,,,,,,,,,,,!' +
      ',,,,,,,,,,,,,,,,,,,\/**%%%%%%###################(#*,,,,,,,,*,,,,,,,,,!' +
      ',,,,,,,,,,,,,,,,,%%%%%%%%########################((,,,,,,,,,,,,,,,,,!' +
      ',,,,,,,,*,*,,,%%%%%%%%%%###########################\/\/,,**,,*\/,,,,,,,!' +
      ',,,,,,,,,,,,,(#%%%%%%%##############################(\/**(\/,*(,,,,,,,!' +
      ',**,,,,#,,####%%%%%%%%#######################%%%#####(\/*,,\/\/********!' +
      '\/,,,,,,(**##(%%%%%%%#########################%%#######(\/\/*\/#********!' +
      ',,,,\/,,(,,,(%%%%%%#####################################\/\/\/**********!' +
      ',,,,,,,*,**#%%%%%######################################(\/(**********!' +
      ',,,,,,,,,,(#%%##########################################(\/**********!' +
      ',,,,,,,**\/(###%#########################################(\/******\/(((!' +
      ',,,,,,,,,,##%#%####################(##(#################(\/\/*********!' +
      '*,,*******(#%################((((#(((((((((#############(\/\/\/\/\/*(****!' +
      '\/((**\/\/\/\/\/(#%#############((((((((((((((((((############(\/\/(\/\/\/*\/*\/\/!' +
      '(\/\/\/*\/(\/(*(##############(((((((((((((((((((#(###########\/*(\/\/\/\/\/\/\/\/!' +
      '\/\/(\/*\/((\/((############(((((((((((((((((((((((((((((#####\/\/((\/(\/\/\/\/\/!' +
      '\/\/((*\/\/(\/*\/###\/\/\/\/\/\/****\/\/\/\/\/((((((((((\/\/\/***,*******((##\/\/\/(\/(\/\/\/\/\/!' +
      '*********###(\/************\/\/\/\/\/(((((\/\/*****,,*\/\/\/\/\/\/\/\/((((\/(\/*******!' +
      '*********(#(##((((\/*****\/\/\/((((((((\/\/\/\/\/\/\/***,,*,*\/(((((((\/(********!' +
      '*********\/(\/\/###\/****,,\/**(((\/((((\/\/\/\/\/***(*,,**\/*\/((##((\/(\/\/\/\/\/\/\/\/\/!' +
      '**********\/#\/#####((\/\/\/\/\/\/\/\/((\/((((\/*\/\/\/\/***\/\/\/\/(((((##(#(\/(\/\/\/\/\/*\/\/!' +
      '**********\/(\/######((((\/\/\/\/(((((((((\/\/(\/\/\/\/\/\/\/\/\/(((((###((\/(\/\/\/\/\/*\/\/!' +
      '****\/\/\/\/\/\/\/#((#####((((((((#((((((((((((((((((((((((((#(((\/*\/*\/\/\/\/\/\/!' +
      '\/\/\/\/\/\/\/\/\/\/\/########((((((((((((((((((\/\/((((((((((((((((((\/\/*\/\/\/\/\/\/\/\/!' +
      '\/\/\/\/\/\/\/\/\/\/\/(######((((((((((((((((((((\/\/(((((((((((((((((\/*\/\/\/\/\/\/\/\/\/!' +
      '\/\/\/\/\/\/\/\/\/\/\/\/######(((((((\/\/\/((((((((((\/\/*\/\/\/\/\/(((((((((((***\/\/\/\/\/\/\/\/!' +
      '\/\/\/\/\/\/\/\/\/\/\/\/((####(((((\/\/\/(((((((((((((\/**\/\/\/\/((((((\/(((\/**\/\/(\/\/\/\/\/(!' +
      '\/\/\/\/\/\/\/\/\/\/\/*\/(((((((((\/\/\/\/\/\/\/\/((((((\/*****\/\/\/\/((\/(((((\/\/***(\/\/\/\/\/(\/\/!' +
      '\/\/\/\/*\/\/\/\/\/\/*\/\/\/\/((((\/\/***************,,,******\/\/\/\/\/\/\/\/****(\/\/\/\/(\/\/\/\/!' +
      '\/\/\/\/*\/\/\/\/\/\/**\/\/*\/\/\/\/\/****************,,,,,**,****\/*******(\/\/\/\/\/\/\/\/\/\/!' +
      '\/\/\/\/*\/\/\/\/\/\/\/\/******\/**********,**,,,,*,,,,,*,,,,********\/\/\/\/\/(\/\/\/(((!' +
      '\/\/\/\/\/\/\/\/\/\/\/\/\/*************\/\/\/\/\/************,,************\/*((\/,(((((!' +
      '\/\/\/\/*\/\/\/\/\/\/\/*\/*\/**********\/\/\/\/\/\/************,,,,**,,,(#*,,*#(\/(((\/((!' +
      '\/\/\/\/(\/\/\/(\/.\/,.,%(****,,,***\/\/\/***,************,,,,,*\/(((,...*(((((((!' +
      '(\/((\/#\/.,,....(((((*,,,,*********,,,,,*******,,,,,*(((((..,*,..,**,,!' +
      '(*,.##\/.,,,,..\/(((((*,,,,********,,,,******,,,,,\/\/(((((*....,,,,,,,,!' +
      '#(\/..*(.......,\/((((((*,,,*************,*,,,,,*\/\/\/\/\/(((...,.........!' +
      '#((,,..,*,,....\/\/\/(((((((,,,,,****,,,*,,,,,,\/\/\/\/\/\/\/((\/...,,,,,,,,,,,!' +
      '(\/*...,\/\/   ... *\/\/\/(((((((\/,,,,,,,,,,,,*\/\/\/\/\/\/\/\/\/\/\/\/...............!' +
      '.,,,,.,..,...,...*\/\/\/\/(((((((((((((((((\/(\/\/\/\/\/\/\/\/\/\/*..,,,,,,,,,,,,..!';

    this.printStrings(inputPortraitString, 5, this._daoGlobals.getModalHasBeenOpened());
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  firstTypingAnimation(): void {
    let randomSpeed = this.getIntervalNumber();
    if (this.i < this.txt.length) {
      document.getElementById("animatedText1").innerHTML += this.txt.charAt(this.i);
      this.i++;

      this.delay(randomSpeed).then(() => {
        this.firstTypingAnimation();
      });
    }
    else {
      this.i = 0;
      $('#modalNextLine').css('visibility', 'visible');
      this.delay(randomSpeed).then(() => {
        this.secondTypeAnimation();
      });
    }
  }

  getIntervalNumber(): number {
    const values = [20, 30, 40, 50, 60, 70, 80, 90, 120, 160, 180];
    let returnvalue = values[Math.floor((Math.random() * values.length))];
    return returnvalue;
  }

  secondTypeAnimation(): void {
    let randomSpeed = this.getIntervalNumber();

    if (this.i < this.txt2.length) {
      document.getElementById("animatedText2").innerHTML += this.txt2.charAt(this.i);
      this.i++;
      this.delay(randomSpeed).then(() => {
        this.secondTypeAnimation();
      });
    }
    else {
      this.PortraitPrintTypeAnimation();
    }
  }

  printStrings(input: string, interval: number, hasBeenOpened: Boolean): void {

    console.log(this._daoGlobals.getModalHasBeenOpened());

    if (hasBeenOpened) {
      for (let k = 0; k < input.length; k++) {
        if (input[k] == '!') {
          document.getElementById("portrait").innerHTML += '<br/>';          
        } else {
          document.getElementById("portrait").innerHTML += input.charAt(k);          
        }
      }
    }
    else {
      let k = 0;
      let intervalId = setInterval(() => {
        if (k < input.length) {
          if (input[k] == '!') {
            document.getElementById("portrait").innerHTML += '<br/>';
            k += 1;
          } else {
            document.getElementById("portrait").innerHTML += input.charAt(k);
            document.getElementById("portrait").innerHTML += input.charAt(k + 1);
            document.getElementById("portrait").innerHTML += input.charAt(k + 2);
            document.getElementById("portrait").innerHTML += input.charAt(k + 3);
            k += 4;
          }
        }
      }, interval);
      this._daoGlobals.setModalHasBeenOpened(true);
    }

    console.log(this._daoGlobals.getModalHasBeenOpened());
  }
}
