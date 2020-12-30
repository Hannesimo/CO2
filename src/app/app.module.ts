import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { AutoComponent } from './auto/auto.component'

@NgModule({
  declarations: [
    AppComponent,
    AutoComponent
  ],
  imports: [
    MatInputModule,
    MatTabsModule,
    MatRadioModule,

    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
