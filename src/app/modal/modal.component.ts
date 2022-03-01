import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() my_modal_title;
  @Input() my_modal_content;
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }
}