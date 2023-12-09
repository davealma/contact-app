import { Component, Input } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { DividerModule } from 'primeng/divider';
import { ContactService } from "../../services/contact.service";
import { Contact } from "../../models/models";
import { Router, RouterLink } from "@angular/router";


@Component({
    selector: 'wt-contact-detail',
    standalone: true,
    imports: [ButtonModule , DividerModule, RouterLink],
    templateUrl: './contact-detail.component.html',
    styleUrl: './contact-detail.component.scss'
})

export class ContactDetailComponent {

    contact: Contact = {} as Contact;

    constructor(private contactService: ContactService, private router: Router){}

    @Input()
    set contactId(id: string) {
        this.contactService.getContact(id).subscribe(response => this.contact = response.data);
    }

    deleteContact() {
        if (confirm(`Are you sure you want to remove the contact ${this.contact.firstName}`)) {
            this.contactService.deleteContact(this.contact.id).subscribe(() => this.router.navigate(['/']));
        }
    }
}