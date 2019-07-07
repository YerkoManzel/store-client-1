import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrls: ['./expense-item.component.scss']
})
export class ExpenseItemComponent implements OnInit {

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
