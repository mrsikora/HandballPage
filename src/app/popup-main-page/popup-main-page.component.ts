import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-popup-main-page',
  templateUrl: './popup-main-page.component.html',
  styleUrls: ['./popup-main-page.component.css']
})
export class PopupMainPageComponent implements OnInit {
  closeResult: string;
  wasSubmitted: boolean;
  form: FormGroup;

  constructor( private modalService: NgbModal, private fb: FormBuilder, private afs: AngularFirestore) {
    this.createForm();
   }
   createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    this.wasSubmitted = true;
    const formRequest = { name, email, message, date };
    this.afs.collection('messages').add(formRequest);
    this.form.reset();
  }

  onCloseReset() {
    this.form.reset();
    this.wasSubmitted = false;
  }
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
  }

}
