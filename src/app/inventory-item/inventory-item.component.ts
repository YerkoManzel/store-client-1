import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Expense} from '../shared/Expense';

@Component({
  selector: 'app-inventory-item',
  templateUrl: './inventory-item.component.html',
  styleUrls: ['./inventory-item.component.scss']
})
export class InventoryItemComponent implements OnInit {

  public dataSource: any;
  displayedColumns: string[] = ['nombre', 'precio', 'cantidad'];

  constructor(private itemService: ItemService) {
  }

  ngOnInit() {
    this.loadItemInstance();
  }

  private loadItemInstance(): void {
    this.itemService.getItemInstances()
      .subscribe((itemInstance) => {
        console.log(itemInstance);
        this.dataSource = itemInstance;
      });
  }

}
