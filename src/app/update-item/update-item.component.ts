import {Component, OnDestroy, OnInit} from '@angular/core';
import {SendItemService} from '../services/send-item.service';
import {Subscription} from 'rxjs';
import {Item} from '../shared/item';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SendBooleanService} from '../services/send-boolean.service';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit, OnDestroy {


  public item: Item;
  public itemEdit: any;
  public nameItem: string;
  public itemIds: number[];
  public itemId: number;
  public formEditItem: FormGroup;

  private sendItemSubscription: Subscription;

  constructor(private sendItemService: SendItemService,
              private itemService: ItemService,
              private sendBooleanService: SendBooleanService,
              private fb: FormBuilder,
              private activeRouter: ActivatedRoute) {
    this.sendItemSubscription = new Subscription();
  }

  ngOnInit() {
    this.itemListener();
    this.initForm();
  }

  ngOnDestroy() {
    this.sendItemSubscription.unsubscribe();
  }

  public editItem(): void {
    if (this.formEditItem.valid) {
      this.itemService.updateItem(this.item.id, this.formEditItem.value)
        .subscribe((item: Item) => {
        });
    }
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
            this.formFilling(item);
          }
        });
    });
  }

  private initForm(): void {
    this.formEditItem = this.fb.group({
      price: [null],
      identifier: [null],
      version: [null]
    });
  }

  private formFilling(item: Item): void {
    this.itemEdit = {
      price: item.price,
      identifier: item.identifier,
      version: item.version
    };

    this.formEditItem.patchValue(this.itemEdit);
  }
}
