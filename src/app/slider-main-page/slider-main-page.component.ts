import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slider-main-page',
  templateUrl: './slider-main-page.component.html',
  styleUrls: ['./slider-main-page.component.css']
})
export class SliderMainPageComponent implements OnInit {
  news$;
  showSpinner = true;
  constructor(private afs: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.news$ = this.afs.collection('news').valueChanges();
    this.news$.subscribe(() => this.showSpinner = false);
  }
}
