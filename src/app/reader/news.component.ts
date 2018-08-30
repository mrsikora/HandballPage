import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
// import { tap } from 'rxjs/operators';
// import { TransferState, makeStateKey } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

// const ARTICLE_KEY = makeStateKey<any>('article');

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  article$;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
  //  private state: TransferState
  ) { }

  ngOnInit() {
  const id = this.route.snapshot.params.id;
  this.article$ = this.afs.doc<any>(`news/${id}`).valueChanges();
    // this.article$ = this.afs.doc<any>(`news/${id}`).valueChanges().pipe(
    //         tap(article => {
    //           this.state.set(ARTICLE_KEY, article);
    //         }));

  }
}


