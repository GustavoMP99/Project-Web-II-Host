import { Component, ViewEncapsulation, OnInit } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { Parallax, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// install Swiper modules
SwiperCore.use([Parallax, Navigation, Pagination, Mousewheel, Keyboard]);


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
