import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';
import {UpdateItemComponent} from '../update-item/update-item.component';
import {InventoryItemComponent} from '../inventory-item/inventory-item.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalogo', component: CatalogComponent},
  {path: 'contactanos', component: ContactComponent},
  {path: 'acercade', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: 'itemEdit/:id', component: UpdateItemComponent},
  {path: 'inventory', component: InventoryItemComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
