import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {
images = [
  {
    name: 'Product 1',
    itemImageSrc : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    thumbnailImageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Product 2',
    itemImageSrc : 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    thumbnailImageSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80'
  },
  {
    name: 'Product 3',
    itemImageSrc : 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    thumbnailImageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=100&q=80' 
  },
  {
    name: 'Product 4',
    itemImageSrc : 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    thumbnailImageSrc: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=100&q=80'   
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
