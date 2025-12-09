import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
images = [
  {
    itemImageSrc : 'https://images.pexels.com/photos/20701096/pexels-photo-20701096/free-photo-of-mon-an.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
  },
  {
    itemImageSrc : 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
  },
  {
    itemImageSrc : 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
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
