import { Routes } from '@angular/router';

import { ItemsComponent } from '../items/items.component';

export const routes: Routes = [
  { path: 'new',                       component: ItemsComponent },
  { path: 'clothing',                  component: ItemsComponent },
  { path: 'sweaters',                  component: ItemsComponent },
  { path: 'dresses',                   component: ItemsComponent },
  { path: 'shoes_and_accessories',     component: ItemsComponent },
  { path: 'sale',                      component: ItemsComponent },
  { path: 'aboutus',                   component: ItemsComponent },
  { path: '', redirectTo: '/clothing', pathMatch: 'full' }
];