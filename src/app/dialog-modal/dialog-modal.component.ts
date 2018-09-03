import {Component, Injectable, OnInit} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.css']
})

@Injectable()

export class DialogModalComponent implements OnInit {
  title: string;
  body: string;
  closeBtnName: string;
  doBtnName: string;
  constructor(public bsModalRef: BsModalRef) { }
  ngOnInit: () => void;
  onSave: () => void;
}
