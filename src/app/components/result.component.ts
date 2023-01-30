import { Component, Input, Output } from '@angular/core';
import { Giphy } from '../model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  @Input()
  gifs: Giphy[] = []
}
