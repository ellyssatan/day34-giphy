import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GifComponent } from './components/gif.component';
import { GiphyService } from './gif-service';
import { ResultComponent } from './components/result.component';

@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    ResultComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
