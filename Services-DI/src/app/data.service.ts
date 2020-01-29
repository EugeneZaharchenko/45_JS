import {LoggerService} from './logger.service';
import {Injectable} from '@angular/core';

export class Item {
  public name: string;
  public id: number;
}

@Injectable()
export class DataService {
  private data: Item[] = [
    {name: 'item 1', id: 1},
    {name: 'item 2', id: 2},
    {name: 'item 3', id: 3},
    // 'item 1',
    // 'item 2',
    // 'item 3',
    // 'item 4',
  ];

  constructor(private logger: LoggerService) {

  }

  public getData(): Item[] {
    this.logger.log('send data');
    return this.data;
  }

  public removeItem(id: number): void {
    this.data = this.data.filter((i) => i.id !== id);
  }
}
