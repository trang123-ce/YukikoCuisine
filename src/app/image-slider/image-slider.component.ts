import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
images = [
  {
    name: '10 Essential Seattle Restaurants in Seattle 2018',
    sub: 'Seattle Met',
    itemImageSrc : 'https://images.pexels.com/photos/20701096/pexels-photo-20701096/free-photo-of-mon-an.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
  },
  {
    name: 'Best Phở 2023',
    sub: 'Eater Seattle',
    itemImageSrc : 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1200'
  },
  {
    name: 'The 38 Essential Seattle Restaurants',
    sub: 'Thrillist',
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
  getSeverity(status: string): string {
    switch (status) {
      case 'In Stock':
        return 'success';  // Màu xanh lá
      case 'Out of Stock':
        return 'danger';   // Màu đỏ
      case 'Low Stock':
        return 'warning';  // Màu vàng
      default:
        return 'info';     // Màu xanh dương
    }
  }
}
