import { Component, OnInit } from "@angular/core";
import { ContactBox } from "../contact-box/contact-box.component";
import { ButtonModule } from "primeng/button";
import { ContactService } from "../../services/contact.service";
import { Contact, ContactResponse } from "../../models/models";
import { CommonModule } from "@angular/common";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
    selector: 'wt-contact-list',
    standalone: true,
    imports:[ContactBox, ButtonModule, CommonModule, ProgressSpinnerModule],
    templateUrl: './contact-list.component.html',
    styleUrl: './contact-list.component.scss'
})

export class ContactListComponent {

    size = 10;
    contacts: Contact[] = [];
    isLoading = false;

    constructor( private contactService: ContactService){}

    private subscribeContact = (response: ContactResponse<Contact[]>) => {
        this.contacts = response.data;
        this.isLoading = false;
    }

    ngOnInit(): void {
        this.isLoading = true;
        this.contactService.getContacts(this.size).subscribe(this.subscribeContact)
    }

    loadMore() {
        this.isLoading = true;
        const increaseSize = 10;
        this.size += increaseSize;
        this.contactService.getContacts(this.size).subscribe(this.subscribeContact);
    }
}