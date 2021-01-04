import { Routes } from '@angular/router';

import { ItemsComponent } from '../items/items.component';

export const routes: Routes = [
  { path: 'items/:category',           component: ItemsComponent },
  { path: '', redirectTo: "['/items', 'all']" , pathMatch: 'full' }
];