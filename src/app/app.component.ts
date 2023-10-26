import { Component } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items: WishItem[] = [
    new WishItem('To learn Angular'),
    new WishItem('Get some coffe', true),
  ];
  title = 'wishlist';

  listFilter: any = '0';

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[this.listFilter]);
  }
}
