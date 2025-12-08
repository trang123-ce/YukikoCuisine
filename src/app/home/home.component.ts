import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) { }
  images = [
    {
      name: '10 Essential Seattle Restaurants in Seattle 2018',
      sub: 'Seattle Met',
      itemImageSrc: 'https://images.pexels.com/photos/20701096/pexels-photo-20701096/free-photo-of-mon-an.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
    },
    {
      name: 'Best Phở 2023',
      sub: 'Eater Seattle',
      itemImageSrc: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
    },
    {
      name: 'The 38 Essential Seattle Restaurants',
      sub: 'Thrillist',
      itemImageSrc: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
    }
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

}