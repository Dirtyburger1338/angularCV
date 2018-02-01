import { Component, OnInit, HostListener } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.css']
})

export class DeviceComponent implements OnInit {
  
  i : number;
  modal : any;
  btn : any;
  span : any;

  constructor() { }

  ngOnInit() {
    this.modal = document.getElementById('myModal');
    this.i = 0;
    this.span = document.getElementsByClassName("close")[0];

  }

  openModal() {
    if($(this.modal).css('display') != 'block'){
      typeWriter(this.i);
    }
    this.modal.style.display = "block";         
  }



}
function typeWriter(i) {
  var txt = "cd images";


    let intervalId = setInterval(() => {  
      if (i < txt.length) {
        document.getElementById("animatedText").innerHTML += txt.charAt(i);
        i++;
    }
    }, 40);
    
  
}
