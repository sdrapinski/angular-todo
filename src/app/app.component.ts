import { Component } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

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
  newWishText = '';
  listFilter: string = '0';

  get visibleItems(): WishItem[] {
    let value = this.listFilter;
    if (value === '0') {
      return this.items;
    } else if (value === '1') {
      return this.items.filter((item) => !item.isComplete);
    } else {
      return this.items.filter((item) => item.isComplete);
    }
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }
  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
