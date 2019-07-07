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

  public itemListener(): void {
    this.itemService.getItemIds().subscribe(items => {
      this.itemIds = items;
      this.activeRouter.params
        .switchMap((params: Params) => this.itemService.getItem(+params.id))
        .subscribe(item => {
          if (item) {
            this.item = item;
            this.nameItem = item.name;
            this.formFilling(item);
          }
        });
    });
  }

  private initForm(): void {
    this.formEditItem = this.fb.group({
      name: [null],
      description: [null],
      price: [null]
    });
  }

  private formFilling(item: Item): void {
    this.itemEdit = {
      name: item.name,
      description: item.description,
      price: item.price
    };

    this.formEditItem.patchValue(this.itemEdit);
  }
}
