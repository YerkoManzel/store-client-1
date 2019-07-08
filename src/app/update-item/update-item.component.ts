import {Component, OnDestroy, OnInit} from '@angular/core';
import {SendItemService} from '../services/send-item.service';
import {Subscription} from 'rxjs';
import {Item} from '../shared/item';
import {ActivatedRoute, ParamMap, Params, Router} from '@angular/router';
import {ItemService} from '../services/item.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SendBooleanService} from '../services/send-boolean.service';
import {ItemInstance} from '../shared/item-instance';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit, OnDestroy {


  public item: ItemInstance;
  public itemId: number;
  public nameItem: string;
  public itemEdit: any;
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
        .switchMap((params: Params) => this.itemService.getItemInstance(+params.id))
        .subscribe(itemInstance => {
          if (itemInstance) {
            this.item = itemInstance;
            this.itemId = itemInstance.item.id;
            this.nameItem = itemInstance.item.name;
            this.formFilling(itemInstance);
          }
        });
    });
  }

  private initForm(): void {
    this.formEditItem = this.fb.group({
      price: [null],
      cantidad: [null],
      identifier: [null],
      version: [null]
    });
  }

  private formFilling(item: ItemInstance): void {
    this.itemEdit = {
      price: item.price,
      cantidad: item.cantidad,
      identifier: item.identifier,
      version: item.version
    };

    this.formEditItem.patchValue(this.itemEdit);
  }
}
