import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule}from '@angular/platform-browser/animations';
import {MatTabsModule, MatButtonModule} from '@angular/material';
import { AppComponent } from './app.component';
import {enableProdMode} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { SimpleTimer } from 'ng2-simple-timer';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
MatTabsModule,
MatButtonModule,
MatInputModule

  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);