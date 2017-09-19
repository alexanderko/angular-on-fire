import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  selectedContact: any;
  @Input() contacts;
  @Output() select = new EventEmitter();

  selectContact(contact) {
    this.selectedContact = contact;
    this.select.next(contact);
  }

  isSelected(contact): boolean {
    return this.selectedContact == contact;
  }
}
