import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { createWiresService } from 'selenium-webdriver/firefox';
import { CounterService } from '../services/counter.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  MenuElements: any;
  
  constructor(private counterService : CounterService) { 
    
  }

  myCounter: number;

  ngOnInit() {
  }

  removeClasses(event){

    this.MenuElements = $('.menu-wrapper > li > a');
    this.MenuElements.removeClass('active');
    this.MenuElements.removeClass('selected');

    for(let i = 0; i < this.MenuElements.length; i++){
      if(this.MenuElements[i].innerText == event.target.innerText){
        this.MenuElements[i].classList.add("selected");
        this.counterService.setGlobalCounter(i);
      }
    }
  }

}
