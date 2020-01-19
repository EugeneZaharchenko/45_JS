import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
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
