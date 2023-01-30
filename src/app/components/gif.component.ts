import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { GiphyService } from '../gif-service';
import { Giphy, Searched } from '../model';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit {
  
  gifForm !: FormGroup
  gifs: Giphy[] = []

  @Output()
  onSearch = new Subject<Searched>()

  constructor(private http: HttpClient, private fb: FormBuilder, private gifSvc: GiphyService) {}

  ngOnInit(): void {
    this.gifForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      prompt: this.fb.control<string>('', [ Validators.required ]),
      limit: this.fb.control<number>(5)
    })
  }

  processForm() {
    const searchCriterial: Searched = this.gifForm.value
    searchCriterial.limit = parseInt(this.gifForm.value.limit)
    this.onSearch.next(searchCriterial)
    this.gifForm = this.createForm()
  }
}
