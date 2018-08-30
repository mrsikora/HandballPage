import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { makeStateKey, StateKey } from '@angular/platform-browser';


const PHOTO_KEY = makeStateKey<string>('photos');


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  photos$;
  closeResult: string;
  items: any;
  showSpinner = true;
  size: number;
  constructor(
    private modalService: NgbModal,
    private afs: AngularFirestore
  ) { }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  open(content, src) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  ngOnInit() {
     this.photos$ = this.afs.collection('gallery').valueChanges();
     this.photos$.subscribe(() => this.showSpinner = false);
   }
}
