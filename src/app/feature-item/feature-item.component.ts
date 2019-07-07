import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {ItemService} from '../services/item.service';
import {Item} from '../shared/item';
import {Expense} from '../shared/Expense';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FeatureInstance} from '../shared/feature-instance';

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
  public formFeature: FormGroup;

  private itemFeatureEdit: any;

  constructor(private itemService: ItemService,
              private activeRouter: ActivatedRoute,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
    this.itemListener();
  }

  public editFeature(): void {
    if (this.formFeature.valid) {
      this.itemService.updateFeature(this.item.id, this.formFeature.value)
        .subscribe((featureInstance: FeatureInstance) => {
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
          }
        });
    });
  }

  private initForm(): void {
    this.formFeature = this.fb.group({
      name: [null],
      value: [null],
      version: [null]
    });
  }

  private formFilling(expense: Expense): void {
    this.itemFeatureEdit = {
      name: expense.expenseType,
      value: expense.description,
      version: expense.value
    };

    this.formFeature.patchValue(this.itemFeatureEdit);
  }

}
