import { Routes } from '@angular/router';

import { ItemsComponent } from '../items/items.component';

export const routes: Routes = [
  { path: 'new',                       component: ItemsComponent },
  { path: 'home',                      component: ItemsComponent },
  { path: 'sweaters',                  component: ItemsComponent },
  { path: 'shoes_and_accessories',     component: ItemsComponent },
  { path: 'sale',                      component: ItemsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];