import {Component, Injector, OnInit} from '@angular/core';
import {DataService, Item} from '../data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  providers: [DataService]
})
export class DataListComponent implements OnInit {

  public list: Item[] = [];

  constructor(private injector: Injector) {
    const dataService = this.injector.get(DataService);
    this.list = dataService.getData();
  }

  ngOnInit() {
    // this.list = this.dataService.getData();
  }

  public updateData(): void {
    // this.list = this.dataService.getData();
  }

}
 
