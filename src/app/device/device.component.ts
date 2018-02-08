import { Component, OnInit, HostListener } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
    this.modal = document.getElementById('myModal');
    this.i = 0;
    this.span = document.getElementsByClassName("close")[0];

  }

  openModal() {
    if ($(this.modal).css('display') != 'block') {
      typeWriter(this.i);
    }
    this.modal.style.display = "block";
  }



}
function typeWriter(i) {
  var txt = "cd images";
  var txt2 = "print image_2013135.txt";
  var j = 0;
  let intervalId = setInterval(() => {
    if (i < txt.length) {
      document.getElementById("animatedText1").innerHTML += txt.charAt(i);
      i++;
    }
    else {

      $('#modalNextLine').css('visibility', 'visible');
      let intervalId = setInterval(() => {
        if (j < txt2.length) {
          document.getElementById("animatedText2").innerHTML += txt2.charAt(j);
          j++;
        }
        else {

          $('#portrait').css('visibility', 'visible');

        }



      }, 80);
    }



  }, 80);

}
