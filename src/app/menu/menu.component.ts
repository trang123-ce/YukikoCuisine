import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodTitle } from './models/food_title';
import { appetizers, phoMenu, vermicelliMenu, yakisobaMenu, ricePlateMenu, wifeFavoriteMenu, kidsMealMenu, drinksMenu } from './models/menu-data';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() foodtype: string | undefined;
  menuData: FoodTitle | undefined;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.foodtype = id;
        switch (this.foodtype) {
          case 'Appetizer':
            this.menuData = appetizers;
            break;
          case 'Pho':
            this.menuData = phoMenu;
            break;
          case 'Vermicelli':
            this.menuData = vermicelliMenu;
            break;
          case 'Yakisoba':
            this.menuData = yakisobaMenu;
            break;
          case 'Rice':
            this.menuData = ricePlateMenu;
            break;
          case 'WifeFavorite':
            this.menuData = wifeFavoriteMenu;
            break;
          case 'KidsMeal':
            this.menuData = kidsMealMenu;
            break;
          case 'Drinks':
            this.menuData = drinksMenu;
            break;
          default:
            this.menuData = appetizers;
            break;
        }
      }
    });
  }

  formatAddon(addon: string | undefined): string {
    if (!addon) return '';
    // Regex to match +$X.XX patterns
    return addon.replace(/(\+\$\d+\.\d{2})/g, '<span class="addon-price">$1</span>');
  }

  isArray(val: any): boolean {
    return Array.isArray(val);
  }
}
