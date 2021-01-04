import { Component, OnInit, ViewChild} from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Item } from '../shared/item';
import { ITEMS } from '../shared/items';

import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: Item[];

  selectedItem: Item;

  category: string;

  constructor(private itemService: ItemService,
      private route: ActivatedRoute,) { 
        route.params.subscribe(
          params => this.refreshItems(params['category']));
      }

  ngOnInit() {
    this.refreshItems(this.route.snapshot.params['category']);
  }

  refreshItems(category: string) {
    console.log(category);
    if (category === 'all') {
      this.items = this.itemService.getItems();
    }
    else {
      this.items = this.itemService.getFilteredItems(category);
    }
  }

  @ViewChild('gridView') gridView;

  columnNum = 6;

  divSize = 900;

  setColNum(div){
    // console.log(div);
    if(this.gridView.nativeElement.offsetWidth < 400){
      this.columnNum = 2;
    }
    if(this.gridView.nativeElement.offsetWidth >= 400 
        && this.gridView.nativeElement.offsetWidth < 800){
      this.columnNum = 4;
    }
    if(this.gridView.nativeElement.offsetWidth >= 800){
      this.columnNum = 6;
    }
  }

}


