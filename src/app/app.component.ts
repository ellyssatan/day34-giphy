import { Component } from '@angular/core';
import { GiphyService } from './gif-service';
import { Giphy, Searched } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'search-giphy';
  gifs: Giphy[] = []

  constructor(private giphySvc: GiphyService) { }

  onSearch(data : Searched) {
    this.giphySvc.searchGif(data)
      .then(result => {
        console.info(">>> result: ", result)
        this.gifs = result
      })
      .catch(error => {
        console.error(">>> error: ", error)
      })
      .finally(() => {
        console.info(">>> in finally")
      })
  }

}
