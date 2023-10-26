import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from 'src/shared/modules/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
})
export class AddWishFormComponent {
  newWishText = '';

  @Output() addWish = new EventEmitter<WishItem>();
  addNewWish() {
    // this.items.push(new WishItem(this.newWishText));
    this.addWish.emit(new WishItem(this.newWishText));
    this.newWishText = '';
  }
}
