import {Comment} from './comment';
import {Item} from './item';

export class ItemInstance {
  id: number;
  identifier: string;
  version: number;
  price: number;
  item: Item;
}
