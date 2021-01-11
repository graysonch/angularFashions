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

  category: string = 'all';

  breakpoint: number;

  constructor(private itemService: ItemService,
      private route: ActivatedRoute,) { 
        console.log("Constructor");
        route.params.subscribe(
          params => this.refreshItems(params['category']));
      }

  ngOnInit() {
    // this.refreshItems('all');
    console.log("ngOnInit");
    this.refreshItems(this.category);
    this.setBreakPoint()
  }

  onResize(event) {
    this.setBreakPoint()
  }

  refreshItems(category: string) {
    console.log(category);
    this.category = category;
    if (this.category === undefined) {
      this.category = 'all';
    }
      
    if (this.category === 'all' || this.category === 'sale' || this.category === 'new') {
      this.items = this.itemService.getItems();
    }
    else {
      this.items = this.itemService.getFilteredItems(category);
    }
  }

  setBreakPoint(){
    //console.log(window.innerWidth);
    if(window.innerWidth < 400){
      this.breakpoint = 2;
    }
    if(window.innerWidth >= 400 
        && window.innerWidth < 600){
      this.breakpoint = 3;
    }
    if(window.innerWidth >= 600 
      && window.innerWidth < 800){
    this.breakpoint = 4;
    }
    if(window.innerWidth >= 800 
      && window.innerWidth < 1000){
    this.breakpoint = 5;
    }
    if(window.innerWidth >= 1000){
      this.breakpoint = 6;
    }
  }

}


