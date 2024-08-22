import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LiquidGaugeComponent} from "./components/liquid-gauge/liquid-gauge.component";
import {ButtonComponent} from "./components/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LiquidGaugeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
