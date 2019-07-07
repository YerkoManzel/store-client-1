import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ItemService} from '../services/item.service';
import {Item} from '../shared/item';

@Component({
  selector: 'app-feature-item',
  templateUrl: './feature-item.component.html',
  styleUrls: ['./feature-item.component.scss']
})
export class FeatureItemComponent implements OnInit {

  public itemIds: number[];
  public item: Item;
  public itemId: number;
  public nameItem: string;

  constructor(private itemService: ItemService,
              private activeRouter: ActivatedRoute) {
  }

  ngOnInit() {
    this.itemListener();
  }

  public itemListener(): void {
    this.itemService.getItemIds().subscribe(items => {
      this.itemIds = items;
      this.activeRouter.params
        .switchMap((params: Params) => this.itemService.getItem(+params.id))
        .subscribe(item => {
          if (item) {
            this.item = item;
            this.itemId = item.id;
            this.nameItem = item.name;
          }
        });
    });
  }

}
