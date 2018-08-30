import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players$;
  showSpinner = true;
  constructor(private afs: AngularFirestore) {
   }

  ngOnInit() {
    this.players$ = this.afs.collection('players').valueChanges();
    this.players$.subscribe(() => this.showSpinner = false);
  }

}
