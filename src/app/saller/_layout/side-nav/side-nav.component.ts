import { Component, OnInit } from '@angular/core';
declare const $: any;
export const SideMenu = [
  {
    text:'گزارشات'
  },
  {
    text:'کیف پول من'
  },
  {
    text:'مدیریت محصولات'
  },
  {
    text:'سفارشات'
  }
]

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  sideMenu;
  constructor() { }

  ngOnInit(): void {
    $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });

    $(window).resize(function (e) {
      if ($(window).width() <= 768) {
        $("#wrapper").removeClass("toggled");
      } else {
        $("#wrapper").addClass("toggled");
      }
    });
    this.sideMenu = SideMenu;
  };
}

