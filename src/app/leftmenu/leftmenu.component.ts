import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { createWiresService } from 'selenium-webdriver/firefox';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {
  MenuElements: any;
  constructor() { }

  ngOnInit() {
  }

  removeClasses() {
    this.MenuElements = $('.menu-wrapper > li > a');
    this.MenuElements.removeClass('active');
    this.MenuElements.removeClass('selected');
  }
}
