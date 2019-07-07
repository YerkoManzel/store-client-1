import {Component, OnDestroy, OnInit} from '@angular/core';
import {Item} from '../shared/item';
import {ItemService} from '../services/item.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {SendBooleanService} from '../services/send-boolean.service';
import {SendItemService} from '../services/send-item.service';
import {logging} from 'selenium-webdriver';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, OnDestroy {

  item: Item;
  itemIds: number[];
  prev: number;
  next: number;

  constructor(private itemService: ItemService,
              private route: ActivatedRoute,
              private sendItemService: SendItemService,
              private router: Router,
              private sendBooleanService: SendBooleanService,
              private location: Location) {
  }

  ngOnInit() {
    this.itemService.getItemIds().subscribe(items => {
      this.itemIds = items;
      this.route.params
        .switchMap((params: Params) => this.itemService.getItem(+params.id))
        .subscribe(item => {
          console.log(item);
          this.item = item;
          this.setPrevNext(item.id);
          this.sendBooleanService.sendBoolean(true);
          this.sendItemService.sendItem(item);
        });
    });
  }

  ngOnDestroy() {
    this.sendBooleanService.sendBoolean(false);
  }

  goBack(): void {
    this.location.back();
  }

  setPrevNext(itemId: number) {
    const index = this.itemIds.indexOf(itemId);
    this.prev = this.itemIds[(this.itemIds.length + index - 1) % this.itemIds.length];
    this.next = this.itemIds[(this.itemIds.length + index + 1) % this.itemIds.length];
  }
}
