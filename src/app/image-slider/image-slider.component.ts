import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
  images = [
    {
      itemImageSrc: 'assets/Store/1.jpg'
    },
    {
      itemImageSrc: 'assets/Store/2.jpg'
    },
    {
      itemImageSrc: 'assets/Store/3.jpg'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6855.JPG'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6860.JPG'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6864.JPG'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6871.JPG'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6879.JPG'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6883.JPG'
    },
    {
      itemImageSrc: 'assets/Store/IMG_6891.JPG'
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
