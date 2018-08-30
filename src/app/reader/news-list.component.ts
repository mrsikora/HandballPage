import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})



export class NewsListComponent implements OnInit {
  news$;
  showSpinner = true;
  p = 1;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
    this.news$ = this.afs.collection('news').valueChanges();
    this.news$.subscribe(() => this.showSpinner = false);
  }
}
