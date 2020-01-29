import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {TableComponent} from './table/table.component';
import {DataListComponent} from './data-list/data-list.component';

const routes: Routes = [
  {path: 'table', component: TableComponent},
  {path: 'list', component: DataListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
