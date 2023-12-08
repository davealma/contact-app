import { Component, OnInit } from "@angular/core";
import { ContactBox } from "../contact-box/contact-box.component";
import { ButtonModule } from "primeng/button";
import { ContactService } from "../../services/contact.service";
import { Contact } from "../../models/models";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'wt-contact-list',
    standalone: true,
    imports:[ContactBox, ButtonModule, CommonModule],
    templateUrl: './contact-list.component.html',
    styleUrl: './contact-list.component.scss'
})

export class ContactListComponent {

    contacts: Contact[] = [];

    constructor( private contactService: ContactService){}

    ngOnInit(): void {
        this.contactService.getContacts().subscribe(response => this.contacts = response.data)
    }
}