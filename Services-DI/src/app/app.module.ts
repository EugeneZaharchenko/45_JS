import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import {DataService} from './data.service';
import {LoggerService} from './logger.service';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService, LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
