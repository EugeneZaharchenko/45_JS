import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first/first.component';
import {FirstModule} from './first/first.module';
import { TestComponent } from './test/test.component';

export function myAngularProvideFactory() {
  return () => {
    return new Promise((resolve, reject) => {
      resolve(true);
      reject("my err");
    })
  }
}

@NgModule({
  declarations: [
    AppComponent, TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: myAngularProvideFactory,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
