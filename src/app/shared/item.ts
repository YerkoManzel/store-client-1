import {Comment} from './comment';

export class Item {
  id: number;
  featured: boolean;
  name: string;
  identifier: string;
  version: number;
  price: number;
  image: string;
  category: string;
  label: string;
  description: string;
  comments: Comment[];
}
